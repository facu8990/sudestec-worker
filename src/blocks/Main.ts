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
      <hgroup class="container">
        <h1>${props.title}</h1>
        <p>${props.description}</p>
      </hgroup>
      <main class="container">
        ${props.children}
      </main>
      <footer>
        <hgroup>
          <h3>Footer</h3>
          <p>Test</p>
        </hgroup>
      </footer>
    </body>
    <script src="/static/htmx.js"></script>
  </html>
`;
