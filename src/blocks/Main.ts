import { html } from "hono/html";

export interface SiteData {
  title: string;
  description: string;
  children?: any;
}

export const Main = (props: SiteData) => html`
  <html>
    <head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width' />
      <meta charset="UTF-8">
      <meta name="description" content="${props.description}">
      <title>${props.title}</title>
      <link rel='icon' type='image/svg+xml' href='/favicon.svg' />
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css' />
    </head>
    <body>
    <nav class='container-fluid'>
      <ul>
        <li><a href="/">Sudestec</a></li>
      </ul>
      <ul>
        <li><a href='/servicios'>Servicios</a></li>
        <li><a href='/ingreso'>Ingreso</a></li>
        <li><a href='#'>Institucional</a></li>
      </ul>
    </nav>
    <header class="container">
      <h1>${props.title}</h1>
      <p>${props.description}</p>
    </header>
    <main class="container">
      ${props.children}
    </main>
    </body>
    <script src="https://unpkg.com/htmx.org@1.9.5/dist/htmx.min.js"></script>
  </html>
`;
