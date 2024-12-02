import { html } from "hono/html";

export const Servicios = html`
<section class="flex flex-col sm:flex-row gap-4">
	<article class="bg-purple-50 rounded-lg shadow-md p-6 flex flex-col content-between" hx-get="/admin/weekly" hx-swap="outerHTML" hx-trigger="load" hx-target="#weeklyPrice">
		<h3 class="text-xl font-bold text-purple-900 mb-2">Servicio clásico</h3>	
		<div class="bg-purple-900 rounded-md p-1 text-center font-bold text-purple-50">
			<p id="weeklyPrice" class="htmx-indicator" aria-busy="true"></p>
		</div>
	</article>
	<article class="bg-purple-50 rounded-lg shadow-md p-6 flex flex-col content-between" hx-get="/admin/family" hx-swap="outerHTML" hx-trigger="load" hx-target="#familyPrice">
		<h3 class="text-xl font-bold text-purple-900 mb-2">Servicio familiar</h3>	
		<div class="bg-purple-900 rounded-md p-1 text-center font-bold text-purple-50">
			<p id="familyPrice" class="htmx-indicator" aria-busy="true"></p>
		</div>
	</article>
</section>
<section class="grow">
	<article class="bg-purple-50 rounded-lg shadow-md flex flex-col gap-4 p-6">
		<h2 class="text-3xl font-bold text-purple-900">Repuestos</h2>
			<table class="table-auto text-left">
				<thead>
					<tr>
						<th scope="col">Parte</th>
						<th scope="col">Foto</th>
						<th scope="col">Precio</th>
					</tr>
				</thead>
				<tbody>
					<tr hx-get="/api/disk" hx-target="this" hx-swap="outerHTML" hx-trigger="load">
						<td class="htmx-indicator" aria-busy="true"></td>
						<td class="htmx-indicator" aria-busy="true"></td>
						<td class="htmx-indicator" aria-busy="true"></td>
					</tr>
					<tr hx-get="/api/psu" hx-target="this" hx-swap="outerHTML" hx-trigger="load">
						<td class="htmx-indicator" aria-busy="true"></td>
						<td class="htmx-indicator" aria-busy="true"></td>
						<td class="htmx-indicator" aria-busy="true"></td>
					</tr>
				</tbody>
			</table>
	</article>
</section>
`;