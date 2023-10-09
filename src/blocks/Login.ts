import { html } from "hono/html";

export const Login = html`
<section>
  <article>
    <form hx-post="/api/auth" hx-swap="none">
      <input type="text" name="username" placeholder="Username or Email">
      <input type="password" name="password" placeholder="Password">
      <button type="submit">Login <span class="htmx-indicator" aria-busy="true"></span></button>
    </form>
  </article>
</section>`;