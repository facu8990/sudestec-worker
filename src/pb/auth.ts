import { Hono } from "hono";
import { deleteCookie, setSignedCookie } from 'hono/cookie';

interface UserRecord {
	id: string;
	collectionId: string;
	collectionName: string;
	username: string;
	verified: boolean;
	emailVisibility: boolean;
	email: string;
	created: Date; // You may want to use a Date type for timestamps
	updated: Date; // You may want to use a Date type for timestamps
	firstname: string;
	lastname: string;
	phone: number;
	address: string;
	identification: number;
	cbu: number;
	alias: string;
	avatar: string;
	admin: boolean;
}
interface SuccessResponse {
	token: string;
	record: UserRecord;
}
interface ErrorResponse {
	code: number;
	message: string;
	data?: {
		identity: {
			code: string;
			message: string;
		};
	};
}
export default new Hono<{ Bindings: CloudflareBindings; }>()
	.post('/', async (c) => {
		const formData = await c.req.formData(),
			username = formData.get('username'),
			password = formData.get('password'),
			authResponse = await fetch(c.env.PB_URL + '/api/collections/employees/auth-with-password', {
				method: "POST",
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					identity: username,
					password: password
				})
			});
		if (authResponse.status !== 200) {
			const response: ErrorResponse = await authResponse.json();
			//@ts-ignore
			return c.json(response.message, response.code);
		} else {
			const response: SuccessResponse = await authResponse.json();
			await setSignedCookie(c, 's_cookie', response.token, 'server-secret', {
				path: '/',
				httpOnly: true,
				maxAge: 1790,
				sameSite: 'Strict',
			});
			c.header('HX-Refresh', 'true');
			return c.json('Login successful', 200);
		}
	})
	.get('/', async (c) => {
		deleteCookie(c, 's_cookie', {
			path: '/',
			httpOnly: true,
			maxAge: 1790,
			sameSite: 'Strict',
		});
		c.header('HX-Location', '/');
		return c.json('Logout successful', 200);
	});