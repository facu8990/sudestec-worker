import { roundSignificant } from "../formatters/rounding";

export interface Repuesto {
	descripcion: string;
	foto: string;
	precio: number;
	link: number;
}

export const getSsd480 = async () => {
	const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=480&shipping_cost=free&category=MLA1672&power_seller=yes&BRAND=16360,9593,18623&HARD_DRIVE_AND_SSD_FORM_FACTOR=9049266&sort=price_asc&limit=3'),
		{ results }: any = await response.json(),
		item: Repuesto = {
			descripcion: results[0].title,
			precio: roundSignificant(results[0].price * 1.1),
			link: results[0].permalink,
			foto: results[0].thumbnail,
		};
	return item;
};
export const getPSU = async () => {
	const response = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=500&shipping_cost=free&category=MLA430916&power_seller=yes&sort=price_asc&limit=1&POWER_OUTPUT=(*-600W)'),
		{ results }: any = await response.json(),
		item: Repuesto = {
			descripcion: results[0].title,
			precio: roundSignificant(results[0].price * 1.1),
			link: results[0].permalink,
			foto: results[0].thumbnail,
		};
	return item;
};