import { Hono } from "hono";
import { Price } from "./components/WeeklyPrice";
import { currencyFormat } from "./formatters/currencyFormat";
import { Servicios } from "./blocks/Servicios";
import { Main, SiteData } from "./blocks/Main";
import { roundSignificant } from "./formatters/rounding";
import { Repuesto, Repuestos } from "./blocks/Repuestos";
import { getWeeklyRate } from "./backdoor/getWeeklyRate";

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

    return c.html(Price('clásico', price));
});

servicios.get('/family', async (c) => {
    const price = await getWeeklyRate('family');
    return c.html(Price('familiar', price));
});

servicios.get('/disk', async (c) => {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=480&category=MLA1672&power_seller=yes&BRAND=16360,9593,18623&HARD_DRIVE_AND_SSD_FORM_FACTOR=9049266&sort=price_asc&limit=1'),
        { results }: any = await response.json(),
        item: Repuesto = {
            descripcion: results[0].title,
            precio: currencyFormat.format(roundSignificant(results[0].price * 1.1)),
            link: results[0].permalink,
            foto: results[0].thumbnail,
        };

    return c.html(Repuestos(item));
});

servicios.get('/psu', async (c) => {
    const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?shipping_cost=free&category=MLA430916&power_seller=yes&sort=price_asc&limit=1&POWER_OUTPUT=(*-600W)'),
        { results }: any = await response.json(),
        item: Repuesto = {
            descripcion: results[0].title,
            precio: currencyFormat.format(roundSignificant(results[0].price * 1.1)),
            link: results[0].permalink,
            foto: results[0].thumbnail,
        };

    return c.html(Repuestos(item));
});

export default servicios;