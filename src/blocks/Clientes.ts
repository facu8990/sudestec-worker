import { html } from "hono/html";

export const Clientes = html`
<nav>
  <ul>
    <li><input type="search" placeholder="Buscar"></li>
  </ul>
  <ul>
    <li><input type="button" value="⬅"></li>
    <li><input type="button" value="➡"></li>
  </ul>
</nav>
<table>
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Teléfono</th>
      <th scope="col">Correo electrónico</th>
      <th scope="col">Tipo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Facundo</th>
      <td>Redon</td>
      <td>1161642450</td>
      <td>facu.vdp@gmail.com</td>
      <td>Legado</td>
    </tr>
  </tbody>
</table>
`;