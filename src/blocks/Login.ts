import { html } from "hono/html";

export const Login = html`<dialog open class="mx-auto">
	<form id="login-form" hx-post="/api/auth" hx-swap="none" class="backdrop:blur bg-blue-50 rounded-lg shadow-md p-6 grid grid-flow-row auto-rows-max content-between gap-2">
		<h3>Iniciar Sesión</h3>
		<input type="text" name="username" placeholder="Username or Email">
		<input type="password" name="password" placeholder="Password">
		<button class="bg-blue-800 rounded-md p-1 text-center font-bold text-blue-50" form="login-form" type="submit">Login</button>
	</form>
</dialog>`;