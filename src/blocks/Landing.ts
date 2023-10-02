import { html } from "hono/html";

export const Landing = () => html`

    <article hx-get="/promo" hx-swap="outerHTML" hx-trigger="load">
      <p class="htmx-indicator" aria-busy="true" ></p>
    </article>

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

    <article id="why-choose-us">
        <hgroup>
            <h2>Por qué elegirnos para sus necesidades de tecnología:</h2>
            <p>En Sudestec, entendemos lo esencial que son los dispositivos tecnológicos y la infraestructura informática para el éxito de su negocio. Ya sea que necesite reparaciones confiables para su PC de escritorio o portátil, esté buscando equipos personalizados que se adapten perfectamente a sus necesidades específicas o desee llevar su empresa al siguiente nivel con un servicio de cloud privado, estamos aquí para ayudar. Aquí hay algunas razones clave por las que somos la elección ideal:</p>
        </hgroup>
        <ul>
            <li><strong>Experiencia y Conocimiento Profesional: </strong>Contamos con un equipo de expertos en tecnología con años de experiencia en el campo. Nuestros técnicos altamente capacitados tienen un profundo conocimiento de hardware y software, lo que nos permite brindar soluciones efectivas y duraderas.</li>
            <li><strong>Personalización: </strong>Entendemos que cada empresa es única, por lo que ofrecemos soluciones personalizadas para satisfacer sus necesidades. Ya sea que necesite un equipo con características específicas o un entorno de cloud privado personalizado, trabajaremos estrechamente con usted para crear la solución perfecta.</li>
            <li><strong>Reparaciones Rápidas y Confiables: </strong>Sabemos lo frustrante que puede ser tener una PC o portátil que no funciona correctamente. Nuestro servicio de reparación es rápido y confiable, lo que significa que minimizamos el tiempo de inactividad y lo mantenemos en funcionamiento.</li>
            <li><strong>Seguridad y Privacidad: </strong>La seguridad de sus datos es una prioridad. Con nuestro servicio de cloud privado, garantizamos la máxima seguridad y privacidad para sus datos comerciales críticos. Protegemos sus activos digitales como si fueran nuestros propios.</li>
            <li><strong>Atención al Cliente Inigualable: </strong>En Sudestec, nos enorgullece brindar un servicio al cliente excepcional. Estamos aquí para responder a sus preguntas, resolver sus problemas y brindarle el soporte que necesita en cada paso del camino.</li>
            <li><strong>Precios Competitivos: </strong>Ofrecemos precios competitivos para todos nuestros servicios, brindando un gran valor por su inversión en tecnología.</li>
            <li><strong>Compromiso con la Calidad: </strong>Nos esforzamos por la excelencia en todo lo que hacemos. Nuestro compromiso con la calidad nos ha convertido en el socio de confianza de numerosas empresas.</li>
        </ul>
    </article>`;