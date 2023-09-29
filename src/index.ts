import { Hono } from 'hono';
import { Main, SiteData } from './blocks/Main';
import servicios from './servicios';
import { Landing } from './blocks/Landing';
import { api } from './api';

const app = new Hono()

  .route('/servicios', servicios)
  .route('/api', api)

  .get('/', (c) => {
    const props: SiteData = {
      title: `Sudestec`,
      description: `Servicios informáticos`,
      children: Landing({})
    };
    return c.html(Main(props));
  });

export default app;
