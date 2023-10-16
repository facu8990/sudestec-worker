import { Hono } from "hono";
import { Admin, SiteData } from "./blocks/Main";
import { Clientes } from "./blocks/Clientes";


export const clientes = new Hono()
  .get('/', async (c) => {
    const props: SiteData = {
      title: `Clientes`,
      description: `Búsqueda y administración.`,
      children: Clientes
    };

    return c.html(Admin(props));
  });
