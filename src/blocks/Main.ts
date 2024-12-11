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
<body class="bg-neutral-50 text-black min-h-screen flex flex-col">
	<nav hx-boost="true" class="sticky top-0 z-50 bg-blue-50 shadow-md py-4">
		<div class="container mx-auto px-4 flex items-center gap-2">
			<a href="/"><img src="/static/favicon.svg" alt="Sudestec Logo" class="size-12>"></a>
			<h4 class="text-xl font-bold grow">Sudestec</h4>
			<a href='/' class="text-blue-600" title="Institucional"></a>
			<a href='/' class="collapse sm:visible text-blue-600" title="Institucional">Institucional</a>
		</div>
	</nav>
	<main class="container mx-auto px-4 space-y-8 py-8 grow">
		${props.children}
	</main>
	<footer class="bg-blue-50 py-6">
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
<body class="bg-neutral-50  text-black min-h-screen flex flex-col">
	<nav hx-boost="true" class="sticky top-0 z-50 bg-blue-50 shadow-md py-4">
		<div class="container mx-auto px-4 flex items-center gap-2">
			<a href="/"><img src="/static/favicon.svg" alt="Sudestec Logo" class="h-12"></a>
			<h4 class="text-xl font-bold grow">Sudestec</h4>
			<a href='/admin/servicios' class="text-blue-600" title="Servicios"></a>
			<a href='/admin/servicios' class="collapse sm:visible text-blue-600" title="Servicios">Servicios</a>
			<a href='/admin/clientes' class="text-blue-600" title="Clientes"></a>
			<a href='/admin/clientes' class="collapse sm:visible text-blue-600" title="Clientes">Clientes</a>
			<a href='/admin/trabajos' class="text-blue-600" title="Trabajos"></a>
			<a href='/admin/trabajos' class="collapse sm:visible text-blue-600" title="Trabajos">Trabajos</a>
			<a href='/admin/uptime' class="text-blue-600" title="Uptime"></a>
			<a href='/admin/uptime' class="collapse sm:visible text-blue-600" title="Uptime">Uptime</a>
			<a href='/api/auth' class="text-orange-600" title="Salir"></a>
			<a href='/api/auth' class="collapse sm:visible text-orange-600" title="Salir">Salir</a>
			</div>
	</nav>
	<main class="container mx-auto p-2 sm:p-4 md:p-6 grow flex flex-col gap-4 max-w-5xl">
		${props.children}
	</main>
	<footer class="bg-blue-50 py-6 shadow-md">
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
