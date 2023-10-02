import { html } from "hono/html";

export const Servicios = html`
<section>
  <div class='grid'>
    <article hx-get="/servicios/weekly" hx-swap="outerHTML" hx-trigger="load">
      <p class="htmx-indicator" aria-busy="true" ></p>
    </article>
    <article class="smooth" hx-get="/servicios/family" hx-swap="outerHTML" hx-trigger="load">
      <p class="htmx-indicator" aria-busy="true" ></p>
    </article>
  </div>
  <h3>Repuestos</h3>
  <table>
    <thead>
      <tr>
        <th scope="col">Parte</th>
        <th scope="col">Foto</th>
        <th scope="col">Precio</th>
      </tr>
    </thead>
    <tbody>
      <tr hx-get="/servicios/disk" hx-target="this" hx-swap="outerHTML" hx-trigger="load">
      <td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td>
      </tr>
      <tr hx-get="/servicios/psu" hx-target="this" hx-swap="outerHTML" hx-trigger="load">
      <td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td>
      </tr>
    </tbody>
  </table>
</section>
`;