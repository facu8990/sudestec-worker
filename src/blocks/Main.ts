import { html } from "hono/html";
import { HtmlEscapedString } from "hono/utils/html";

export interface SiteData {
  title: string;
  description: string;
  children: HtmlEscapedString;
}

export const Main = (props: SiteData) => html`
  <html>
    <head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width' />
      <meta charset="UTF-8">
      <meta name="description" content="${props.description}">
      <title>${props.title}</title>
      <link rel='icon' type='image/svg+xml' href='/static/favicon.svg' />
      <link rel='stylesheet' href='/static/pico.css' />
      <link rel='stylesheet' href='/static/custom.css' />
    </head>
    <body>
      <nav hx-boost="true" class='container-fluid'>
        <ul>
          <li><a href="/"><img src="/static/favicon.svg" alt="Sudestec Logo" style="height: 45px;"/></a></li>
        </ul>
        <ul>
          <!-- 
            <li><a href='#'>Institucional</a></li>
          -->
        </ul>
      </nav>
      <main class="container">
        <hgroup>
          <h1>${props.title}</h1>
          <p>${props.description}</p>
        </hgroup>
        ${props.children}
      </main>
      <footer class="container-fluid">
        <hgroup>
          <h4>Sudestec - 2023</h4>
          <p>Sitio desarrollado por <a href="https://www.linkedin.com/in/facundo-redon" target="_blank">Facundo Redon</a></p>
        </hgroup>
      </footer>
    </body>
    <script src="/static/htmx.js"></script>
  </html>
`;

export const Admin = (props: SiteData) => html`
  <html>
    <head>
      <meta charset='UTF-8' />
      <meta name='viewport' content='width=device-width' />
      <meta charset="UTF-8">
      <meta name="description" content="${props.description}">
      <title>${props.title}</title>
      <link rel='icon' type='image/svg+xml' href='/static/favicon.svg' />
      <link rel='stylesheet' href='/static/pico.css' />
      <link rel='stylesheet' href='/static/custom.css' />
    </head>
    <body>
      <nav hx-boost="true" class='container-fluid'>
        <ul>
          <li><a href="/"><img src="/static/favicon.svg" alt="Sudestec Logo" style="height: 45px;"/></a></li>
          <li><strong>${props.title}</strong></li>
          <li><i>${props.description}</i></li>
        </ul>
        <ul>
          <li><a href='/admin/servicios'>Servicios</a></li>
          <li><a href='/admin/clientes'>Clientes</a></li>
          <li><a href='/admin/trabajos'>Trabajos</a></li>
          <li><a href='/api/auth'>Salir</a></li>
          <!-- 
          -->
        </ul>
      </nav>
      <main class="container">
        ${props.children}
      </main>
      <footer class="container-fluid">
        <hgroup>
          <h4>Sudestec - 2023</h4>
          <p>Sitio desarrollado por <a href="https://www.linkedin.com/in/facundo-redon" target="_blank">Facundo Redon</a></p>
        </hgroup>
      </footer>
    </body>
    <script src="/static/htmx.js"></script>
  </html>
`;
