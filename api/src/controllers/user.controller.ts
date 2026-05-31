import type { Context } from "hono"
import { auth } from "../lib/auth.js"

export const getUser = async (c: Context) => {
    const session = await auth.api.getSession({
        headers: c.req.raw.headers
    })

    return c.json({
        data: session
    })


}


