import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";
import {internal} from "./_generated/api"
import {Webhook} from "svix"

const http = httpRouter();


http.route({
  path: "/clerk",
  method: "POST",
  handler: httpAction(async (ctx, request) => {
    const payloadString = await request.text();
    const headerPayload = request.headers;

    // You'll set this environment variable in the Convex dashboard later
    const svixSecret = process.env.CLERK_WEBHOOK_SECRET!; 
    const wh = new Webhook(svixSecret);

    try {
      const event = wh.verify(payloadString, {
        "svix-id": headerPayload.get("svix-id")!,
        "svix-timestamp": headerPayload.get("svix-timestamp")!,
        "svix-signature": headerPayload.get("svix-signature")!,
      }) as any;

      if (event.type === "user.created") {
        await ctx.runMutation(internal.users.createUser, {
          clerkId: event.data.id,
          email: event.data.email_addresses[0].email_address,
          name: event.data.name
        });
      }
      return new Response("Success", { status: 200 });
    } catch (err) {
      return new Response("Webhook Error", { status: 400 });
    }
  }),
});

export default http;