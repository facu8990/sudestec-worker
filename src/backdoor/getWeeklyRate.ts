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

export const getWeeklyRate = async (backendUrl: any, rateType: rates = 'weekly') => {
    const response = await fetch(`${backendUrl}/api/collections/${rateType}_rate/records`),
        { items }: rateResponse = await response.json();
    return items[0].price;
};