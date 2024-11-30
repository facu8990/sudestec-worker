import { Hono } from "hono";
import { Price } from "./components/WeeklyPrice";
import { currencyFormat } from "./formatters/currencyFormat";
import { Admin, Main } from "./blocks/Main";
import { getWeeklyRate } from "./backdoor/getWeeklyRate";
import { Login } from "./blocks/Login";
import { deleteCookie, getSignedCookie, setSignedCookie } from "hono/cookie";
import clientes from "./clientes";
import servicios from "./servicios";
import { html } from "hono/html";
import { SiteData, SuccessLogin } from "./types";

export default new Hono<{ Bindings: CloudflareBindings; }>()
	.use('*', async (c, next) => {
		const token = await getSignedCookie(c, 'server-secret', 's_cookie'),
			props = {
				title: `Administración`,
				description: `Inicio de sesión.`,
				children: Login
			};
		if (token) {
			const response = await fetch(c.env.PB_URL + '/api/collections/employees/auth-refresh', {
				method: 'POST',
				headers: { "Authorization": token }
			});
			if (response.status === 200) {
				const { token }: SuccessLogin = await response.json();
				await setSignedCookie(c, 's_cookie', token, 'server-secret', {
					path: '/',
					httpOnly: true,
					maxAge: 1790,
					sameSite: 'Strict',
				});
				await next();
			} else {
				deleteCookie(c, 's_cookie');
				c.header('HX-Refresh', 'true');
				return c.html(Main(props));
			}
		}
		return c.html(Main(props));
	})
	.route('clientes', clientes)
	.route('servicios', servicios)
	.get('/', async (c) => {
		const props: SiteData = {
			title: `Administración`,
			description: `Sección detrás de camaras.`,
			children: html`<p>Hola</p>`
		};
		return c.html(Admin(props));
	})
	.get('/weekly', async (c) => {
		const price = await getWeeklyRate(c.env.PB_URL);
		return c.html(Price(currencyFormat.format(price)));
	})
	.get('/family', async (c) => {
		const price = await getWeeklyRate(c.env.PB_URL, 'family');
		return c.html(Price(currencyFormat.format(price)));
	});

