import {mutation,internalMutation, query} from "./_generated/server"
import {v} from "convex/values"

export const createUser = internalMutation({
  args: { clerkId: v.string(), email: v.string() , name: v.optional(v.string()) },
  handler: async (ctx, args) => {
    await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      name: args.name,
    });
  },
});

