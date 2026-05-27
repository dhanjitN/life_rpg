import { getCalendarEvents } from "../controllers/calendar.controller.js";
import { Hono } from "hono";
const route = new Hono;

route.get("/", getCalendarEvents);

export default route;