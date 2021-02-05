import { FETCH_PRODUCTS , FETCH_DETAIL_PRODUCT} from './types';

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS
    }
}

export const fetchProductDetail = () => {
    return {
        type: FETCH_DETAIL_PRODUCT
    }
}