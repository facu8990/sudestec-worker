import { Hono } from "hono";
import auth from "./pb/auth";
import { getPSU, getSsd480 } from "./backdoor/ml";
import { Repuestos } from "./blocks/Repuestos";

export default new Hono<{ Bindings: CloudflareBindings; }>()
	.route('/auth', auth)

	.get('/disk', async (c) => {
		const response = await getSsd480();
		return c.html(Repuestos(response));
	})
	.get('/psu', async (c) => {
		const response = await getPSU();
		return c.html(Repuestos(response));
	});


