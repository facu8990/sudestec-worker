import { Hono } from "hono";
import { Env } from "../api";
import { setSignedCookie } from 'hono/cookie';
import { decode } from "hono/jwt";

interface UserRecord {
  id: string;
  collectionId: string;
  collectionName: string;
  username: string;
  verified: boolean;
  emailVisibility: boolean;
  email: string;
  created: string; // You may want to use a Date type for timestamps
  updated: string; // You may want to use a Date type for timestamps
  firstname: string;
  lastname: string;
  phone: number;
  address: string;
  identification: number;
  cbu: number;
  alias: string;
  avatar: string;
  admin: boolean;
}

interface SuccessResponse {
  token: string;
  record: UserRecord;
}

interface ErrorResponse {
  code: number;
  message: string;
  data?: {
    identity: {
      code: string;
      message: string;
    };
  };
}

export const auth = new Hono<{ Bindings: Env; }>()
  .post('/', async (c) => {
    const formData = await c.req.formData(),
      username = formData.get('username'),
      password = formData.get('password'),
      servicePrice = await fetch(c.env.PB_URL + '/api/collections/employees/auth-with-password', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          identity: username,
          password: password
        })
      });
    if (servicePrice.status !== 200) {
      const response: ErrorResponse = await servicePrice.json();

      return c.json(response.message, response.code);
    } else {
      const response: SuccessResponse = await servicePrice.json();
      await setSignedCookie(c, 's_cookie', response.token, 'server-secret', {
        path: '/',
        httpOnly: true,
        maxAge: 1790,
        sameSite: 'Strict',
      });
      c.header('HX-Refresh', 'true');
      return c.json(response, 200);
    }
  });
