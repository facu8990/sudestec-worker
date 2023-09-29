import { html } from "hono/html";

export const Price = (name: string, price: string) => html`
<article>
  <h5>Servicio ${name}</h5>
  <p>${price}</p>
</article>

`;