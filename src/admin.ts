import { Hono } from "hono";
import { Price } from "./components/WeeklyPrice";
import { currencyFormat } from "./formatters/currencyFormat";
import { Servicios } from "./blocks/Servicios";
import { Admin, Main, SiteData } from "./blocks/Main";
import { roundSignificant } from "./formatters/rounding";
import { Repuestos } from "./blocks/Repuestos";
import { getWeeklyRate } from "./backdoor/getWeeklyRate";
import { Repuesto, getSsd480 } from "./backdoor/ml";
import { Env } from "./api";
import { Login } from "./blocks/Login";
import { deleteCookie, getSignedCookie } from "hono/cookie";

const admin = new Hono<{ Bindings: Env; }>()
  .use('*', async (c, next) => {
    const token = await getSignedCookie(c, 'server-secret', 's_cookie'),
      props = {
        title: `Administración`,
        description: `Inicio de sesión.`,
        children: Login
      };
    if (token) {
      const response = await fetch(c.env.PB_URL + '/api/collections/employees/auth-refresh', {
        method: 'POST',
        headers: { "Authorization": token }
      });
      if (response.status === 200) await next();
      else {
        deleteCookie(c, 's_cookie');
        return c.html(Main(props));
      }
    }
    return c.html(Main(props));
  })

  .get('/', async (c) => {
    const props: SiteData = {
      title: `Nuestros servicios`,
      description: `Sección de servicios ofrecidos por Sudestec.`,
      children: Servicios
    };

    return c.html(Admin(props));
  })

  .get('/weekly', async (c) => {
    const price = await getWeeklyRate();
    return c.html(Price(currencyFormat.format(price)));
  })

  .get('/family', async (c) => {
    const price = await getWeeklyRate('family');
    return c.html(Price(currencyFormat.format(price)));
  });


export default admin;