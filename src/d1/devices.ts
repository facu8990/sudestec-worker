import { Hono } from "hono";
import { Env } from "../api";

export const devices = new Hono<{ Bindings: Env; }>()
    .post("/", async (c) => {
        const { customer_id, device_name, device_type, serial_number } = await c.req.json();
        try {
            const result = await c.env.SDB
                .prepare(`INSERT INTO Devices (customer_id, device_name, device_type, serial_number) VALUES (?, ?, ?, ?)`)
                .bind(customer_id, device_name, device_type, serial_number)
                .run();
            return c.json({ device_id: result.meta.last_row_id }, 201);
        } catch (e) {
            return c.json({ err: e }, 500);
        }
    })
    .get("/:id", async (c) => {
        const deviceId = c.req.param("id");
        const dbResponse = await c.env.SDB
            .prepare("SELECT * FROM Devices WHERE device_id = ?")
            .bind(deviceId)
            .run();
        return dbResponse.results.length > 0
            ? c.json(dbResponse.results[0])
            : c.json('Device not found.', 404);
    })
    .put("/:id", async (c) => {
        const deviceId = c.req.param("id");
        const { customer_id, device_name, device_type, serial_number } = await c.req.json();

        const result = await c.env.SDB
            .prepare(`UPDATE Devices SET customer_id = ?, device_name = ?, device_type = ?, serial_number = ? WHERE device_id = ?`)
            .bind(customer_id, device_name, device_type, serial_number, deviceId)
            .run();
        return result.meta.changes > 0
            ? c.json('Device updated.', 200)
            : c.json(result, 404);
    })
    .delete("/:id", async (c) => {
        const deviceId = c.req.param("id");

        try {
            const result = await c.env.SDB
                .prepare("DELETE FROM Devices WHERE device_id = ?")
                .bind(deviceId)
                .run();
            return result.results.length > 0
                ? c.json(result)
                : c.json(result, 404);
        } catch (e) {
            return c.json({ err: e }, 500);
        }
    });
