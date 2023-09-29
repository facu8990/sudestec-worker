import { currencyFormat } from "../formatters/currencyFormat";

export const getWeeklyRate = async (rateType: 'family' | 'weekly') => {
    const url: string = `https://api.sudeste.ar/api/collections/${rateType}_rate/records`,
        response = await fetch(url),
        { items }: any = await response.json();
    return currencyFormat.format(items[0].price);

};