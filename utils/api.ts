import { ProductData } from '../types/product';

export const fetchProduct = async (lang = 'en'): Promise<ProductData> => {
    const res = await fetch(`https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`, {
        headers: {
            'X-TENMS-SOURCE-PLATFORM': 'web',
            'Accept': 'application/json',
        },
    });

    if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
    }

    const json = await res.json();

    return json.data;
};
