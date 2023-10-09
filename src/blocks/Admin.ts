import { html } from "hono/html";

export const Login = html`
<section>
  <article>
    <form id="login-form" hx-post="/login" hx-trigger="submit">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required>
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required>
      <br>
      <button type="submit" hx-target="#login-status">Login</button>
    </form>

    <div id="login-status"></div>
  </article>
</section>
<script>
  document.addEventListener('htmx:afterRequest', function (event) {
    const response = event.detail.response;
    if (response.status === 200) {
      const token = response.json.token;
      localStorage.setItem('token', token);
      window.location.href = '/dashboard'; // Redirect to the dashboard page
    } else {
      document.getElementById('login-status').innerText = 'Login failed. Please check your credentials.';
    }
  });
</script>`;