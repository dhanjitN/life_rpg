import { query } from "../_generated/server"
import { v } from "convex/values"; 

export const userDetail = query({
    args: {
        id : v.id("users")
    },
    handler: async (ctx, args) => {
        const userDetail = await ctx.db.get("users", args.id)
        return userDetail;
    }
})


export const userGoalToday = query({
    args: {
        id: v.id("users")
    },
    handler : async (ctx , args) => {
        const goals = await ctx.db.query("users").withIndex()
    }
})