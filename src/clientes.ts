import { Hono } from "hono";
import { Admin, Prompt } from "./blocks/Main";
import { EditarCliente, NuevoCliente, Opciones, SearchHeader, SearchResults } from "./blocks/Clientes";
import { getSignedCookie } from "hono/cookie";
import { Env } from "./api";
import { Customer, CustomerDetails, ErrorResponse, SiteData, SuccessResponse } from "./types";


export const clientes = new Hono<{ Bindings: Env; }>()
  .get('/', async (c) => {
    const props: SiteData = {
      title: `Clientes`,
      description: `Búsqueda y administración.`,
      children: SearchHeader
    };

    return c.html(Admin(props));

  })
  .get('/buscar', async (c) => {
    const currentPage = c.req.query('page') || 1,
      itemsPage = c.req.query('perPage') || 30,
      filter = c.req.query('filter') || '',
      sort = c.req.query('sort') || '',
      auth = await getSignedCookie(c, 'server-secret', 's_cookie'),
      search = await fetch(c.env.PB_URL + `/api/collections/clientes/records?page=${currentPage}&perPage=${itemsPage}&filter=(email~'${filter}' || first~'${filter}' || last~'${filter}')&sort=${sort}&expand=type,address`, {
        method: 'GET',
        headers: new Headers({
          "Authorization": 'Bearer ' + auth
        })
      });
    if (search.status !== 200) {
      const { message }: ErrorResponse = await search.json();
      return c.html(Prompt(message));
    }
    const response: SuccessResponse<Customer> = await search.json();
    return c.html(SearchResults(response));
  })

  .get('/tipos', async (c) => {
    const auth = await getSignedCookie(c, 'server-secret', 's_cookie'),
      search = await fetch(c.env.PB_URL + `/api/collections/cliente_tipo/records`, {
        method: 'GET',
        headers: new Headers({
          "Authorization": 'Bearer ' + auth
        })
      });
    if (search.status !== 200) {
      const { message }: ErrorResponse = await search.json();
      return c.html(Prompt(message));
    }
    const response: SuccessResponse<Customer> = await search.json();
    return c.html(Opciones(response.items));

  })
  .get('/editar/:id', async (c) => {
    const clientId = c.req.param('id'),
      auth = await getSignedCookie(c, 'server-secret', 's_cookie'),
      search = await fetch(c.env.PB_URL + `/api/collections/clientes/records/${clientId}`, {
        method: 'GET',
        headers: new Headers({
          "Authorization": 'Bearer ' + auth
        })
      });
    if (search.status !== 200) {
      const { message }: ErrorResponse = await search.json();
      return c.html(Prompt(message));
    }
    const response: CustomerDetails = await search.json();

    return c.html(EditarCliente(response));
  })
  .get('/crear', async (c) => {
    return c.html(NuevoCliente);
  });
