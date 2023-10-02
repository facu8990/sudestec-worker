import { html } from "hono/html";
import { currencyFormat } from "../formatters/currencyFormat";

export const Promo = (price: number) => html`
<article class="container-flex">
  <hgroup>
    <h1>¡Reviví tu Equipo!</h1>
    <p>Dale una segunda chance antes de comprar uno nuevo</p>
  </hgroup>
  <p>No te pierdas esta promoción por solo: <strong>${currencyFormat.format(price)}</strong></p>
</article>
`;
