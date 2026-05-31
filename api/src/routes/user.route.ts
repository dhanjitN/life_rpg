import { Hono } from "hono";
import { getUser } from "../controllers/user.controller.js";

const route = new Hono;

route.get("/", getUser);

export default route; 
