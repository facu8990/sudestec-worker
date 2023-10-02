import { Hono } from "hono";
import { customers } from "./db/customers";
import { devices } from "./db/devices";

export type Env = {
    SDB: D1Database;
};

export const api = new Hono()
    .route('/customers', customers)
    .route('/devices', devices);
