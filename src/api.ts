import { Hono } from "hono";
import { auth } from "./pb/auth";

export type Env = {
  PB_URL: string;
};

export const api = new Hono()
  .route('/auth', auth);
