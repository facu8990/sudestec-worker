import { html } from "hono/html";

export interface Repuesto {
  descripcion: string;
  foto: string;
  precio: string;
  link: number;
}

export const Promo = (props: Repuesto) => html`
<section class="container-flex">
  <th scope="row"><a href="${item.link}" target="_blank">${item.descripcion}</a></th>
  <td><img src="${item.foto}" alt="${item.descripcion}" style="max-height: 50px"/></td>
  <td>${item.precio}</td>
</section>
`;
