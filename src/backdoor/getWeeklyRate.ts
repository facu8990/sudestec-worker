import { currencyFormat } from "../formatters/currencyFormat";

type rates = 'family' | 'weekly';

interface rateResponse {
    page: number,
    perPage: number,
    totalPages: number,
    totalItems: number,
    items: Array<{
        collectionId: string,
        collectionName: string,
        id: string,
        price: number;
    }>;
}

export const getWeeklyRate = async (rateType: rates) => {
    const response = await fetch(`https://api.sudeste.ar/api/collections/${rateType}_rate/records`),
        { items }: rateResponse = await response.json();
    console.log(JSON.stringify(items[0]));
    return items[0].price;
};