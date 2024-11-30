import { html } from "hono/html";
import { Customer, CustomerDetails, CustomerTypes, SuccessResponse } from "../types";

export const SearchHeader = html`<article>
<form hx-get="/admin/clientes/buscar" hx-swap="outerHTML" hx-trigger="keyup delay:500ms,change,select from:input" hx-target="#results" hx-indicator="#loading-client">
	<nav>
		<ul>
			<li><span hx-get="clientes/crear" hx-indicator="#loading-client" hx-target="closest nav" hx-swap="beforebegin" role="button">Nuevo</span></li>
			<li><span id="loading-client" class="htmx-indicator" aria-busy="true"></span></li>
		</ul>
		<ul>
			<li><input type="search" name="filter" placeholder="Buscar"></li>
		</ul>
	</nav>
</form>
<div id="results">
	<nav>
		<p>Comience a escribir para buscar.</p>
	</nav>
</div>
</article>
`;

export const SearchResults = (results: SuccessResponse<Customer>) => `
<div id="results">
  <table>
    <thead>
      <tr>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">Teléfono</th>
        <th scope="col">Correo electrónico</th>
        <th scope="col">Dirección</th>
        <th scope="col">Tipo</th>
      </tr>
    </thead>
    <tbody>
      ${results.items.map(i => `<tr hx-get="clientes/editar/${i.id}" hx-indicator="#loading-client" hx-target="closest table" hx-swap="beforebegin">
          <th scope="row">${i.first}</th>
          <td>${i.last}</td>
          <td>${i.phone}</td>
          <td>${i.email}</td>
          <td>${i.address || 'n/a'}</td>
          <td>${i.type}</td>
        </tr>`).join('')}
    </tbody>
  </table>
  <nav>
    <div>
    ${results.totalPages > 0
		? `<p role="button" disabled>Página ${results.page}/${results.totalPages} Items ${results.totalItems}</p>`
		: ``}
    </div>
    <div>
    ${results.page > 0 && results.page < 2
		? `<input type="button" value="Atras" disabled>`
		: `<input type="button" value="Atras">`}
    ${results.page > 0 && results.page < results.totalPages
		? `<input type="button" value="Siguiente">`
		: `<input type="button" value="Siguiente" disabled>`}
    </div>
  </nav>
</div>`;


export const EditarCliente = (content: CustomerDetails) => html`
<dialog open>
  <article>
    <h3>Editar Cliente</h3>
    <div>
      <div class="two-grid">
        <input type="text" placeholder="${content.first || 'Nombre/s'}">
        <input type="text" placeholder="${content.last || 'Apellido/s'}">
      </div>
      <input type="email" placeholder="${content.email || 'Correo electrónico'}">
      <input type="text" placeholder="${content.address || 'Dirección'}">
      <div class="two-grid">
        <input type="text" placeholder="${content.phone || 'Teléfono'}">
        <input type="number" placeholder="${content.identification || 'DNI / Pasaporte'}">
      </div>
      <select id="tipos" hx-get="/admin/clientes/tipos" hx-trigger="load" hx-target="#tipos" hx-swap="outerHTML">
        <option selected disabled value="">${content.type}</span></option>
      </select>
      <label for="file">Foto
        <input type='file' name='photo' title="Foto">
      </label>
    </div>
    <footer>
      <p hx-get="/" hx-target="closest dialog" hx-swap="delete" hx-confirm="¿Desea cancelar?" role="button" class="secondary">Cancel</p>
      <a href="#confirm" role="button">Confirm</a>
    </footer>
  </article>
</dialog>`;

export const NuevoCliente = html`
<dialog open>
  <article>
    <h3>Nuevo cliente</h3>
    <div class="two-grid">
      <input type="text" name="first" placeholder="Nombre">
      <input type="text" name="last" placeholder="Apellido">
    </div>
      <input type="email" name="email" placeholder="Correo electrónico">
      <input type="text" name="address" placeholder="Domicilio">
    <div class="two-grid">
      <input type="text" name="phone" placeholder="Teléfono">
      <input type="number" name="identification" placeholder="DNI/Pasaporte">
    </div>
    <select id="tipos" hx-get="/admin/clientes/tipos" hx-trigger="load" hx-target="#tipos" hx-swap="outerHTML">
    </select>
    <label for="file">Foto
      <input type='file' name='photo' title="Foto">
    </label>
    <footer>
      <p hx-get="/" hx-target="closest dialog" hx-swap="delete" hx-confirm="¿Desea cancelar?" role="button" class="secondary">Cancel</p>
      <a href="#confirm" role="button">Confirm</a>
    </footer>
  </article>
</dialog>`;

export const Opciones = (opciones: CustomerTypes[]) => {
	const content = opciones.map((o) =>
		`<option value="${o.collectionId}">${o.type}</option>`
	).join('');

	return `<select><option selected disabled value="">Tipo</option>${content}</select>`;
};
