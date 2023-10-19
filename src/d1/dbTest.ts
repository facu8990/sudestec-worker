import { drizzle } from 'drizzle-orm/d1';
import { Env } from '../api';

export default {
  async fetch(request: Request, env: Env) {
    const db = drizzle(env.SDB);
    const result = await db.select().from().all();
    return Response.json(results);
  },
};

