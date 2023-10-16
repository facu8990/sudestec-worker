import { Hono } from "hono";
import { Env } from "../api";
import { Admin, SiteData } from "../blocks/Main";
import { html } from "hono/html";


export const clients = new Hono<{ Bindings: Env; }>()
  .get('/search', async (c) => {
    const props: SiteData = {
      title: `Administración`,
      description: `Sección detrás de camaras.`,
      children: html`Clientes`
    };

    return c.html(Admin(props));
  })
  ;


async function getCustomerRecords(page = 1, perPage = 30, sort = "", filter = "", expand = "") {
  try {
    // Build the URL with the query parameters
    let url = `http://192.168.1.141:7790/api/collections/customers/records?page=${page}&perPage=${perPage}`;

    if (sort) url += `&sort=${sort}`;
    if (filter) url += `&filter=${encodeURIComponent(filter)}`;
    if (expand) url += `&expand=${expand}`;

    const response = await fetch(url);

    if (!response.ok) {
      return await response.json();
    }

    return await response.json();

  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Example usage:
const page = 1,
  perPage = 30,
  sort = "-created,id",
  filter = "(id='abc' && created>'2022-01-01')",
  expand = "relField1,relField2.subRelField";

getCustomerRecords(page, perPage, sort, filter, expand)
  .then((data) => {
    console.log("Customer Records:", data);
  })
  .catch((error) => {
    console.error("Failed to retrieve customer records:", error);
  });
