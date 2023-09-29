import { html } from "hono/html";

export const Servicios = html`
<section>
  <div class='grid'>
    <article hx-get="/servicios/weekly" hx-swap="outerHTML" hx-trigger="load"></article>
    <article class="smooth" hx-get="/servicios/family" hx-swap="outerHTML" hx-trigger="load"></article>
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
      <tr hx-get="/servicios/disk" hx-target="this" hx-swap="outerHTML" hx-trigger="load"></tr>
      <tr hx-get="/servicios/psu" hx-target="this" hx-swap="outerHTML" hx-trigger="load"></tr>
    </tbody>
  </table>
</section>
`;