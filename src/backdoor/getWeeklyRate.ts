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

export const getWeeklyRate = async (rateType: rates = 'weekly') => {
    const response = await fetch(`https://api.sudeste.ar/api/collections/${rateType}_rate/records`),
        { items }: rateResponse = await response.json();
    return items[0].price;
};