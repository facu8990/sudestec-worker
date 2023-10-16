import { Hono } from "hono";
import { auth } from "./pb/auth";
import { Repuesto, getSsd480 } from "./backdoor/ml";
import { Repuestos } from "./blocks/Repuestos";
import { roundSignificant } from "./formatters/rounding";

export type Env = {
  PB_URL: string;
};

export const api = new Hono()
  .route('/auth', auth)

  .get('/disk', async (c) => {
    const response = await getSsd480();
    return c.html(Repuestos(response));
  })

  .get('/psu', async (c) => {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=500&shipping_cost=free&category=MLA430916&power_seller=yes&sort=price_asc&limit=1&POWER_OUTPUT=(*-600W)'),
      { results }: any = await response.json(),
      item: Repuesto = {
        descripcion: results[0].title,
        precio: roundSignificant(results[0].price * 1.1),
        link: results[0].permalink,
        foto: results[0].thumbnail,
      };
    return c.html(Repuestos(item));
  });

