import { Hono } from "hono";
import { customers } from "./db/customers";

export const api = new Hono()
    .route('/customers', customers);
