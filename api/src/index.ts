import { Hono } from "hono";
import { cors } from "hono/cors";
import { config } from "dotenv";
config({
  path:'./.env',
  debug: true
})
import { auth } from "./lib/auth.js";

const app = new Hono();

app.use("/api/auth/*", cors({
  origin: "http://localhost:5173",  
  allowHeaders: ["Content-Type", "Authorization"],
  allowMethods: ["GET", "POST", "OPTIONS"],
  credentials: true,  // ← critical for cookies to work
}))

app.on(["POST", "GET"], "/api/auth/*", (c) => auth.handler(c.req.raw));

app.get("/", (c)=>{
  return c.text("Hi the server is running")
})

import calendarRoute from "./routes/calendar.route.js"

app.route("/calendar", calendarRoute);

export default {
  port: 3000,
  fetch : app.fetch
}