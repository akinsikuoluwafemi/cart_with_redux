import { FETCH_PRODUCTS } from './types';

export const fetchProducts = (type) => {
    return {
        type: FETCH_PRODUCTS
    }
}