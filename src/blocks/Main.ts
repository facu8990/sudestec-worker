import { html } from "hono/html";
import { SiteData } from "../types";


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
          <li><strong>${props.title}</strong></li>
          <li><i>${props.description}</i></li>
        </ul>
        <ul>
          <li><a href='#'>Institucional</a></li>
          <!-- 
          -->
        </ul>
      </nav>
      <main>
        ${props.children}
      </main>
      <footer>
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
      <meta name="description" content="${props.description}">
      <title>${props.title}</title>
      <link rel='icon' type='image/svg+xml' href='/static/favicon.svg' />
      <!--
        <link rel='stylesheet' href='/static/pico.css' />
        
      -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.fluid.classless.min.css">
      <link rel='stylesheet' href='/static/custom.css' />
    </head>
    <body>
      <nav hx-boost="true" class='container-fluid'>
        <ul>
          <li><a href="/"><img src="/static/favicon.svg" alt="Sudestec Logo" style="height: 45px;"/></a></li>
          <li><strong>${props.title}</strong></li>
          <li><span id="page-loading" class="htmx-indicator" aria-busy="true"></li>
        </ul>
        <ul>
          <li>
            <details role="list">
              <summary aria-haspopup="true" role="button">
                Menu
              </summary>
              <ul role="listbox">
                <li><a hx-indicator="#page-loading" href='/admin/servicios'>Servicios</a></li>
                <li><a hx-indicator="#page-loading" href='/admin/clientes'>Clientes</a></li>
                <li><a hx-indicator="#page-loading" href='/admin/trabajos'>Trabajos</a></li>
                <li><a hx-indicator="#page-loading" href='/api/auth'>Salir</a></li>
              </ul>
            </details>
          </li>
          <!-- 
          -->
        </ul>
      </nav>
      <main>
        <i>${props.description}</i>
          ${props.children}
      </main>
      <footer>
        <hgroup>
          <h4>Sudestec - 2023</h4>
          <p>Sitio desarrollado por <a href="https://www.linkedin.com/in/facundo-redon" target="_blank">Facundo Redon</a></p>
        </hgroup>
      </footer>
    </body>
    <script src="/static/htmx.js"></script>
  </html>
`;

export const Prompt = (message: string) => html`
<dialog open>
  <article>
    <h3>Advertencia</h3>
    <p>${message}</p>
    <footer>
      <p hx-get="/" hx-target="closest dialog" hx-swap="delete" role="button" class="secondary">Cerrar</p>
    </footer>
  </article>
</dialog>`;
