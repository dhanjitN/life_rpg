import type { Context } from "hono";

export const getCalendarEvents = async (c: Context) => {
    return c.json({
        event : "Work on your code !"
    })
}