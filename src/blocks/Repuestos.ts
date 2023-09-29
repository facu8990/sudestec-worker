import { html } from "hono/html";

export interface Repuesto {
    descripcion: string;
    foto: string;
    precio: string;
    link: number;
}

export const Repuestos = (item: Repuesto) => html`
<tr>
  <th scope="row"><a href="${item.link}" target="_blank">${item.descripcion}</a></th>
  <td><img src="${item.foto}" alt="${item.descripcion}" style="max-height: 50px"/></td>
  <td>${item.precio}</td>
</tr>
`;
