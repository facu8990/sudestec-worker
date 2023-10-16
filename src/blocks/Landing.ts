import { html } from "hono/html";

export const Landing = html`
<section>
  <article>
    <header>
      <hgroup>
        <h1>¡Reviví tu Equipo!</h1>
        <p>Dale una segunda chance antes de gastar en uno nuevo.</p>
      </hgroup>
    </header>
    <ul>
      <li>Limpieza integral de componentes.</li>
      <li>Cambio de pasta térmica de CPU.</li>
      <li>Instalación de Sistema Operativo.</li>
      <li>Disco de estado solido (SSD) de 480 GB. Hasta 10 veces más rápido que los tradicionales.</li>
    </ul>
    <footer hx-get="/promo" hx-swap="outerHTML" hx-trigger="load" hx-target="#promoPrice">
      <p>No te pierdas esta promoción por solo: <strong id="promoPrice" class="htmx-indicator" aria-busy="true"></strong></p>
    </footer>
  </article>
</section>
<section>
  <article id="services">
    <h2>Nuestros Servicios</h2>
    <ul>
      <li>Reparación de PC</li>
      <li>Armado de pc a memdida. Gamer, Diseño, Oficina y Hogar.</li>
      <li>Resguardo de informacion.</li>
      <li>Actualización de componentes</li>
      <li>Instalacion de software seleccionado</li>
    </ul>
  </article>
</section>
<section class="container-flex">
  <article id="why-choose-us">
    <h2>Por qué elegirnos para sus necesidades de tecnología:</h2>
    <ul>
      <li><strong>Experiencia y Conocimiento:</strong> Nuestro equipo de expertos en tecnología posee amplia experiencia y profundo conocimiento en hardware y software.</li>
      <li><strong>Personalización:</strong> Ofrecemos soluciones a medida para satisfacer las necesidades únicas de su empresa, ya sea en hardware o servicios en la nube.</li>
      <li><strong>Reparaciones Rápidas:</strong> Minimizamos el tiempo de inactividad con un servicio de reparación rápido y confiable.</li>
      <li><strong>Seguridad y Privacidad:</strong> Garantizamos la máxima seguridad y privacidad para sus datos empresariales críticos con nuestro servicio de nube privada.</li>
      <li><strong>Atención al Cliente:</strong> Nos enorgullece brindar un servicio al cliente excepcional, estando aquí para responder preguntas y resolver problemas en cada paso del camino.</li>
      <li><strong>Precios Competitivos:</strong> Ofrecemos precios competitivos, brindando un gran valor por su inversión en tecnología.</li>
      <li><strong>Compromiso con la Calidad:</strong> Nos esforzamos por la excelencia en todo lo que hacemos, convirtiéndonos en el socio de confianza de numerosas empresas.</li>
    </ul>
  </article>
</section>`;