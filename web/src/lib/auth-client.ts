import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL: "http://localhost:3000"
})

export const googleLogin = async () => {
    await authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:5173/status"
    })
}

export const getCalendarAccess = async () => {
    await authClient.linkSocial({
        provider: "google",
        scopes: ["https://www.googleapis.com/auth/calendar.readonly"],
        callbackURL: "http://localhost:5173/status"
    })
}