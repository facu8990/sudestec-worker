import { Hono } from 'hono';
import { secureHeaders } from 'hono/secure-headers';
import { Main } from './blocks/Main';
import { Landing } from './blocks/Landing';
import api from './api';
import { getWeeklyRate } from './backdoor/getWeeklyRate';
import { Promo } from './blocks/Promo';
import { getSsd480 } from './backdoor/ml';
import admin from './admin';
import { SiteData } from './types';

const app = new Hono<{ Bindings: CloudflareBindings; }>()
	.use('*', secureHeaders())
	.route('/admin', admin)
	.route('/api', api)
	.get('/', async (c) => {
		const props: SiteData = {
			title: `Sudestec`,
			description: `Servicios informáticos`,
			children: Landing
		};
		return c.html(Main(props));
	})
	.get('/tail', async (c) => {
		const props: SiteData = {
			title: `Sudestec`,
			description: `Servicios informáticos`,
			children: Tailwind
		};
		return c.html(Main(props));
	})
	.get('/promo', async (c) => {
		const servicePrice = await getWeeklyRate(c.env.PB_URL),
			ssdPrice = await getSsd480(),
			promoPrice = servicePrice + ssdPrice.precio;
		return c.html(Promo(promoPrice));
	});
export default app;
