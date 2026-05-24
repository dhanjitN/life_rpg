// src/auth.ts
import { betterAuth } from "better-auth"
import { mongodbAdapter } from "better-auth/adapters/mongodb"
import { MongoClient } from "mongodb"

const client = new MongoClient(process.env.MONGODB_URI!)
console.log("ENV", process.env.MONGODB_URI)

export const auth = betterAuth({
    database: mongodbAdapter(client.db(process.env.DB_NAME!)),
    trustedOrigins: ["http://localhost:5173"],
    baseURL: process.env.BASE_URL!,
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            scopes: [
                "openid",
                "email",
                "profile",
                "https://www.googleapis.com/auth/calendar"
            ],
            prompt: "select_account consent",
            accessType: "offline",
        }
    },
    secret: process.env.BETTER_AUTH_SECRET
})