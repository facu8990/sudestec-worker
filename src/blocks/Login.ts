import { html } from "hono/html";

export const Login = html`
<dialog open>
  <article>
    <h3>Iniciar Sesión</h3>
    <form id="login-form" hx-post="/api/auth" hx-swap="none">
      <input type="text" name="username" placeholder="Username or Email">
      <input type="password" name="password" placeholder="Password">
    </form>
    <footer>
      <button form="login-form" type="submit">Login</button>
    </footer>
  </article>
</dialog>`;