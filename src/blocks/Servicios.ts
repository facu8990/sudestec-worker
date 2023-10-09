import { html } from "hono/html";

export const Servicios = html`
<section>
  <div class='grid'>
    <article hx-get="/admin/weekly" hx-swap="outerHTML" hx-trigger="load" hx-target="#weeklyPrice">
      <h5>Servicio clásico</h5>
      <p id="weeklyPrice" class="htmx-indicator" aria-busy="true"></p>
    </article>
    <article hx-get="/admin/family" hx-swap="outerHTML" hx-trigger="load" hx-target="#familyPrice">
      <h5>Servicio clásico</h5>
      <p id="familyPrice" class="htmx-indicator" aria-busy="true"></p>
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
      <tr hx-get="/admin/disk" hx-target="this" hx-swap="outerHTML" hx-trigger="load">
      <td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td>
      </tr>
      <tr hx-get="/admin/psu" hx-target="this" hx-swap="outerHTML" hx-trigger="load">
      <td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td>
      </tr>
    </tbody>
  </table>
</section>
`;