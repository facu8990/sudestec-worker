import { html } from "hono/html";
import { Repuesto } from "../backdoor/ml";
import { currencyFormat } from "../formatters/currencyFormat";

export const Repuestos = (item: Repuesto) => html`<tr>
<th scope="row"><a href="${item.link}" target="_blank">${item.descripcion}</a></th>
<td><img src="${item.foto}" alt="${item.descripcion}" style="max-height: 50px" /></td>
<td>${currencyFormat.format(item.precio)}</td>
</tr>
`;
