import { Hono } from "hono";
import { Env } from "../api";

export const customers = new Hono<{ Bindings: Env; }>()
    .post("/", async (c) => {
        const { first_name, last_name, email, phone_number, address } = await c.req.json();
        try {
            const result = await c.env.SDB
                .prepare(`INSERT INTO Customers (first_name, last_name, email, phone_number, address) VALUES (?, ?, ?, ?, ?)`)
                .bind(first_name, last_name, email, phone_number, address)
                .run();
            return c.json({ customer_id: result.meta.last_row_id }, 201);
        } catch (e) {
            return c.json({ err: c }, 500);
        }
    })
    .get("/:id", async (c) => {
        const customerId = c.req.param("id"),
            dbResponse = await c.env.SDB
                .prepare("SELECT * FROM Customers WHERE customer_id = ?")
                .bind(customerId)
                .run();
        return dbResponse.results.length > 0
            ? c.json(dbResponse.results[0])
            : c.json('Customer not found.', 404);
    })
    .get("/email/:email", async (c) => {
        const email = c.req.param("email") !== ':email'
            ? c.req.param("email")
            : null,
            customer = await c.env.SDB
                .prepare(`SELECT * FROM Customers WHERE email LIKE '%' || COALESCE(?, '') || '%'`)
                .bind(email)
                .run();
        return customer.results.length > 0
            ? c.json(customer.results)
            : c.json('Email not found.', 404);
    })
    .put("/:id", async (c) => {
        const customerId = c.req.param("id"),
            { first_name, last_name, email, phone_number, address } = await c.req.json();

        const result = await c.env.SDB
            .prepare(`UPDATE Customers SET first_name = ?, last_name = ?, email = ?, phone_number = ?, address = ? WHERE customer_id = ?`)
            .bind(first_name, last_name, email, phone_number, address, customerId)
            .run();
        return result.meta.changes > 0
            ? c.json('Customer updated.', 200)
            : c.json(result, 404);
    })
    .delete("/:id", async (c) => {
        const customerId = c.req.param("id");

        try {
            const result = await c.env.SDB
                .prepare("DELETE FROM Customers WHERE customer_id = ?")
                .bind(customerId)
                .run();
            return result.results.length > 0
                ? c.json(result)
                : c.json(result, 404);
        } catch (e) {
            return c.json({ err: e }, 500);
        }
    });

