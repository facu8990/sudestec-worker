import { html } from "hono/html";

export const Landing = html`
<article class="color-primary">
  <header>
    <hgroup>
      <h2>¡Reviví tu Equipo!</h2>
      <p>Dale una segunda chance antes de gastar en uno nuevo.</p>
    </hgroup>
  </header>
  <ul>
    <li><p>Limpieza integral de componentes.</p></li>
    <li><p>Cambio de pasta térmica de CPU.</p></li>
    <li><p>Instalación de Sistema Operativo.</p></li>
    <li><p>Disco de estado solido (SSD) de 480 GB. Hasta 10 veces más rápido que los tradicionales.</p></li>
  </ul>
  <div hx-get="/promo" hx-swap="outerHTML" hx-trigger="load" hx-target="#promoPrice">
    <p>No te pierdas esta promoción por solo: <strong id="promoPrice" class="htmx-indicator" aria-busy="true"></strong></p>
  </div>
</article>
<article class="color-contrast" id="services">
  <h2>Nuestros Servicios</h2>
  <ul>
    <li><p>Reparación de PC.</p></li>
    <li><p>Armado de pc a memdida. Gamer, Diseño, Oficina y Hogar.</p></li>
    <li><p>Resguardo de informacion.</p></li>
    <li><p>Actualización de componentes</p></li>
    <li><p>Instalacion de software seleccionado.</p></li>
  </ul>
</article>
<article class="color-accent" id="why-choose-us">
  <h2>Por qué elegirnos para sus necesidades de tecnología:</h2>
  <ul>
    <li><p><strong>Experiencia y Conocimiento:</strong> Nuestro equipo de expertos en tecnología posee amplia experiencia y profundo conocimiento en hardware y software.</p></li>
    <li><p><strong>Personalización:</strong> Ofrecemos soluciones a medida para satisfacer las necesidades únicas de su empresa, ya sea en hardware o servicios en la nube.</p></li>
    <li><p><strong>Reparaciones Rápidas:</strong> Minimizamos el tiempo de inactividad con un servicio de reparación rápido y confiable.</p></li>
    <li><p><strong>Seguridad y Privacidad:</strong> Garantizamos la máxima seguridad y privacidad para sus datos empresariales críticos con nuestro servicio de nube privada.</p></li>
    <li><p><strong>Atención al Cliente:</strong> Nos enorgullece brindar un servicio al cliente excepcional, estando aquí para responder preguntas y resolver problemas en cada paso del camino.</p></li>
    <li><p><strong>Precios Competitivos:</strong> Ofrecemos precios competitivos, brindando un gran valor por su inversión en tecnología.</p></li>
    <li><p><strong>Compromiso con la Calidad:</strong> Nos esforzamos por la excelencia en todo lo que hacemos, convirtiéndonos en el socio de confianza de numerosas empresas.</p></li>
  </ul>
</article>`;