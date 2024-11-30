import { html } from "hono/html";

export const Price = (price: string) => html`<p>${price}</p>`;