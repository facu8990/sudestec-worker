import { Hono } from "hono";
import { Price } from "./components/WeeklyPrice";
import { currencyFormat } from "./formatters/currencyFormat";
import { Servicios } from "./blocks/Servicios";
import { Main, SiteData } from "./blocks/Main";
import { roundSignificant } from "./formatters/rounding";
import { Repuestos } from "./blocks/Repuestos";
import { getWeeklyRate } from "./backdoor/getWeeklyRate";
import { Repuesto, getSsd480 } from "./backdoor/ml";

const servicios = new Hono();

servicios.get('/', (c) => {
    const props: SiteData = {
        title: `Nuestros servicios`,
        description: `Sección de servicios ofrecidos por Sudestec.`,
        children: Servicios
    };

    return c.html(Main(props));
});

servicios.get('/weekly', async (c) => {
    const price = await getWeeklyRate('weekly');

    return c.html(Price('clásico', currencyFormat.format(price)));
});

servicios.get('/family', async (c) => {
    const price = await getWeeklyRate('family');
    return c.html(Price('familiar', currencyFormat.format(price)));
});

servicios.get('/disk', async (c) => {
    const response = await getSsd480();

    return c.html(Repuestos(response));
});

servicios.get('/psu', async (c) => {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?shipping_cost=free&category=MLA430916&power_seller=yes&sort=price_asc&limit=1&POWER_OUTPUT=(*-600W)'),
        { results }: any = await response.json(),
        item: Repuesto = {
            descripcion: results[0].title,
            precio: roundSignificant(results[0].price * 1.1),
            link: results[0].permalink,
            foto: results[0].thumbnail,
        };

    return c.html(Repuestos(item));
});

export default servicios;