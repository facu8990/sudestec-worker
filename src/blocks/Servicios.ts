import { html } from "hono/html";

export const Servicios = html`
<section>
  <div class='two-grid'>
    <article hx-get="/admin/weekly" hx-swap="outerHTML" hx-trigger="load" hx-target="#weeklyPrice">
      <hgroup>
        <h3>Servicio clásico</h3>
        <p id="weeklyPrice" class="htmx-indicator" aria-busy="true"></p>
      </hgroup>  
    </article>
    <article hx-get="/admin/family" hx-swap="outerHTML" hx-trigger="load" hx-target="#familyPrice">
      <hgroup>
        <h3>Servicio familiar</h3>
        <p id="familyPrice" class="htmx-indicator" aria-busy="true"></p>
      </hgroup>  
    </article>
  </div>
</section>
<section>
  <article>
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
        <tr hx-get="/api/disk" hx-target="this" hx-swap="outerHTML" hx-trigger="load">
        <td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td>
        </tr>
        <tr hx-get="/api/psu" hx-target="this" hx-swap="outerHTML" hx-trigger="load">
        <td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td><td class="htmx-indicator" aria-busy="true" ></td>
        </tr>
      </tbody>
    </table>
  </article>
</section>
`;