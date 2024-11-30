import { html } from "hono/html";

export const Landing = html`
<div class="grid md:grid-cols-2 gap-4">
	<article id="promotion" class="bg-blue-50 rounded-lg shadow-md p-6 grid grid-flow-row auto-rows-max content-between">
		<header class="mb-6">
			<hgroup>
				<h2 class="text-3xl font-bold text-blue-900 mb-2">¡Reviví tu Equipo!</h2>
				<p class="text-lg text-blue-700">Dale una segunda chance antes de gastar en uno nuevo.</p>
			</hgroup>
		</header>
		<ul class="space-y-3 mb-6">
			<li class="flex items-start space-x-3">
				<p class="text-blue-500"></p>
				<p>Limpieza integral de componentes.</p>
			</li>
			<li class="flex items-start space-x-3">
				<p class="text-blue-500"></p>
				<p>Cambio de pasta térmica de CPU.</p>
			</li>
			<li class="flex items-start space-x-3">
				<p class="text-blue-500"></p>
				<p>Instalación de Sistema Operativo.</p>
			</li>
			<li class="flex items-start space-x-3">
				<p class="text-blue-500"></p>
				<p>Disco de estado solido (SSD) de 480 GB. Hasta 10 veces más rápido que los tradicionales.</p>
			</li>
		</ul>
		<div hx-get="/promo" hx-swap="outerHTML" hx-trigger="load" hx-target="#promoPrice" class="bg-blue-100 rounded-md p-4 text-center">
			<p>No te pierdas esta promoción por solo: <strong class="text-blue-800">$ 86.000,00</strong></p>
		</div>
	</article>
	<article id="services" class="bg-green-50 rounded-lg shadow-md p-6 grid grid-flow-row auto-rows-max content-between">
		<header class="mb-6">
			<hgroup>
				<h2 class="text-3xl font-bold text-green-900 mb-2">Nuestros Servicios</h2>
				<p class="text-lg text-green-700">Tus necesidades a nuestro alcance.</p>
			</hgroup>
		</header>
		<ul class="space-y-3 mb-6">
			<li class="flex items-start space-x-3">
				<p class="text-green-500"></p>
				<p>Reparación de PC.</p>
			</li>
			<li class="flex items-start space-x-3">
				<p class="text-green-500"></p>
				<p>Armado de pc a medida. Gamer, Diseño, Oficina y Hogar.</p>
			</li>
			<li class="flex items-start space-x-3">
				<p class="text-green-500"></p>
				<p>Resguardo de información.</p>
			</li>
			<li class="flex items-start space-x-3">
				<p class="text-green-500"></p>
				<p>Actualización de componentes.</p>
			</li>
			<!-- Other service list items -->
		</ul>
		<div class="bg-green-100 rounded-md p-4 text-center">
			<p>Contactanos <strong class="text-green-800"></strong></p>
		</div>
	</article>
</div>
<article id="why-choose-us" class="bg-purple-50 rounded-lg shadow-md p-6">
	<h2 class="text-2xl font-bold text-purple-900 mb-6">Por qué elegirnos para sus necesidades de tecnología:</h2>
	<ul class="space-y-4 grid md:grid-cols-2 gap-4">
		<li class="bg-white p-4 rounded-md shadow-sm">
			<strong class="text-purple-700 block mb-2">Experiencia y Conocimiento:</strong>
			<p>Nuestro equipo de expertos en tecnología posee amplia experiencia y profundo conocimiento en hardware y software.</p>
		</li>
		<li class="bg-white p-4 rounded-md shadow-sm">
			<strong class="text-purple-700 block mb-2">Personalización:</strong>
			<p>Ofrecemos soluciones a medida para satisfacer las necesidades únicas de su empresa, ya sea en hardware o servicios en la nube.</p>
		</li>
		<li class="bg-white p-4 rounded-md shadow-sm">
			<strong class="text-purple-700 block mb-2">Reparaciones Rápidas:</strong>
			<p>Minimizamos el tiempo de inactividad con un servicio de reparación rápido y confiable.</p>
		</li>
		<li class="bg-white p-4 rounded-md shadow-sm">
			<strong class="text-purple-700 block mb-2">Seguridad y Privacidad:</strong>
			<p>Garantizamos la máxima seguridad y privacidad para sus datos empresariales críticos con nuestro servicio de nube privada.</p>
		</li>
		<li class="bg-white p-4 rounded-md shadow-sm">
			<strong class="text-purple-700 block mb-2">Atención al Cliente:</strong>
			<p>Nos enorgullece brindar un servicio al cliente excepcional, estando aquí para responder preguntas y resolver problemas en cada paso del camino.</p>
		</li>
		<li class="bg-white p-4 rounded-md shadow-sm">
			<strong class="text-purple-700 block mb-2">Precios Competitivos:</strong>
			<p>Ofrecemos precios competitivos, brindando un gran valor por su inversión en tecnología.</p>
		</li>
		<li class="bg-white p-4 rounded-md shadow-sm">
			<strong class="text-purple-700 block mb-2">Compromiso con la Calidad:</strong>
			<p>Nos esforzamos por la excelencia en todo lo que hacemos, convirtiéndonos en el socio de confianza de numerosas empresas.</p>
		</li>
		<!-- Other why choose us list items -->
	</ul>
</article>
`;
