import { html } from "hono/html";
import { SiteData } from "../types";

export const Main = (props: SiteData) => html`<!DOCTYPE html>
<html>
<head>
	<meta charset='UTF-8' />
	<meta name='viewport' content='width=device-width' />
	<meta charset="UTF-8">
	<meta name="description" content="${props.description}">
	<title>${props.title}</title>
	<link rel='icon' type='image/svg+xml' href='/static/favicon.svg' />
	<link rel='stylesheet' href='/static/main.css' />
</head>
<body class="bg-white text-black">
	<nav class="sticky top-0 z-50 bg-blue-50 shadow-md py-4">
		<div class="container mx-auto px-4 flex items-center justify-between">
			<div class="flex items-center space-x-4">
				<a href="/">
					<img src="/static/favicon.svg" alt="Sudestec Logo" class="h-12">
				</a>
				<h4 class="text-xl font-bold">Sudestec</h4>
			</div>
			<a href="#" class="text-pink-600 hover:text-pink-800 transition-colors">Institucional</a>
		</div>
	</nav>
	<main class="container mx-auto px-4 space-y-8 py-8">
		${props.children}
	</main>
	<footer class="bg-neutral-50 py-6">
	<div class="container mx-auto px-4 flex justify-between items-center">
		<div>
			<small class="block">${props.title}</small>
			<small class="text-blue-400"><i>${props.description}</i></small>
		</div>
			<small>Por <a href="https://www.linkedin.com/in/facundo-redon/" class="text-blue-300 hover:underline">Facundo Redon</a></small>
		</div>
	</footer>
</body>
<script src="/static/htmx.js"></script>
</html>`;

export const Admin = (props: SiteData) => html`<!DOCTYPE html>
<html>
<head>
	<meta charset='UTF-8' />
	<meta name='viewport' content='width=device-width' />
	<meta name="description" content="${props.description}">
	<title>${props.title}</title>
	<link rel='icon' type='image/svg+xml' href='/static/favicon.svg' />
	<link rel='stylesheet' href='/static/main.css' />
</head>
<body>
	<nav hx-boost="true" class="color-secondary">
		<ul>
			<li><a href="/"><img src="/static/favicon.svg" alt="Sudestec Logo" style="height: 45px;" /></a></li>
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
		</ul>
	</nav>
	<main class="main-content">
		${props.children}
	</main>
	<footer class="color-secondary">
		<small>
			<p>${props.title}</p>
			<i>${props.description}</i>
		</small>
		<small>Sitio desarrollado por <a href="https://www.linkedin.com/in/facundo-redon/">Facundo Redon</a>.</small>
	</footer>
</body>
<script src="/static/htmx.js"></script>
</html>`;

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
