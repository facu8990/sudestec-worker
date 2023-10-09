import { html } from "hono/html";
import { currencyFormat } from "../formatters/currencyFormat";

export const Promo = (price: number) => html`
<strong>${currencyFormat.format(price)}</strong>
`;
