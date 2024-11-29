import { Hono } from "hono";
import { Admin } from "./blocks/Main";
import { Servicios } from "./blocks/Servicios";
import { SiteData } from "./types";


export default new Hono<{ Bindings: CloudflareBindings; }>()
	.get('/', async (c) => {
		const props: SiteData = {
			title: `Servicios`,
			description: `Precios y costos.`,
			children: Servicios
		};

		return c.html(Admin(props));
	});
