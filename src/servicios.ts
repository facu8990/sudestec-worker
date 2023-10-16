import { Hono } from "hono";
import { Admin, SiteData } from "./blocks/Main";
import { Servicios } from "./blocks/Servicios";


export const servicios = new Hono()
  .get('/', async (c) => {
    const props: SiteData = {
      title: `Servicios`,
      description: `Precios y costos.`,
      children: Servicios
    };

    return c.html(Admin(props));
  });
