import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import { internal } from "./_generated/api";
import type { WebhookEvent } from "@clerk/backend";
import { Webhook } from "svix";

const http = httpRouter();

http.route({
  path: "/clerk-users-webhook",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const event = await validateRequest(request);
    if (!event) {
      return new Response("Error occured", { status: 400 });
    }
    switch (event.type) {
      case "user.created": // intentional fallthrough
      case "user.updated":
        await ctx.runMutation(internal.users.upsertFromClerk, {
          data: event.data,
        });
        break;

      case "user.deleted": {
        const clerkUserId = event.data.id!;
        await ctx.runMutation(internal.users.deleteFromClerk, { clerkUserId });
        break;
      }
      default:
        console.log("Ignored Clerk webhook event", event.type);
    }

    return new Response(null, { status: 200 });
  }),
});

async function validateRequest(req: Request): Promise<WebhookEvent | null> {
  const payloadString = await req.text();
  
  // Debug: log everything
  console.log("=== WEBHOOK DEBUG ===");
  console.log("Secret exists:", !!process.env.CLERK_WEBHOOK_SECRET);
  console.log("Secret value prefix:", process.env.CLERK_WEBHOOK_SECRET?.slice(0, 10));
  console.log("svix-id:", req.headers.get("svix-id"));
  console.log("svix-timestamp:", req.headers.get("svix-timestamp"));
  console.log("svix-signature:", req.headers.get("svix-signature"));
  console.log("payload length:", payloadString.length);
  console.log("payload preview:", payloadString.slice(0, 100));

  const svixHeaders = {
    "svix-id": req.headers.get("svix-id")!,
    "svix-timestamp": req.headers.get("svix-timestamp")!,
    "svix-signature": req.headers.get("svix-signature")!,
  };
  const wh = new Webhook(process.env.CLERK_WEBHOOK_SECRET!);
  try {
    return wh.verify(payloadString, svixHeaders) as unknown as WebhookEvent;
  } catch (error) {
    console.error("=== VERIFY FAILED ===");
    console.error("Error:", error);
    return null;
  }
}

export default http;