import { Hono } from 'hono';
import { secureHeaders } from 'hono/secure-headers';
import { Main, SiteData } from './blocks/Main';
import servicios from './servicios';
import { Landing } from './blocks/Landing';
import { api } from './api';
import { getWeeklyRate } from './backdoor/getWeeklyRate';
import { Promo } from './blocks/Promo';
import { getSsd480 } from './backdoor/ml';

const app = new Hono()

  .use('*', secureHeaders())

  .route('/servicios', servicios)
  .route('/api', api)

  .get('/', (c) => {
    const props: SiteData = {
      title: `Sudestec`,
      description: `Servicios informáticos`,
      children: Landing()
    };
    return c.html(Main(props));
  })
  .get('/promo', async (c) => {
    const servicePrice = await getWeeklyRate('weekly'),
      ssdPrice = await getSsd480(),
      promoPrice = servicePrice + ssdPrice.precio;


    return c.html(Promo(promoPrice));
  });

export default app;
