import { FETCH_PRODUCTS , FETCH_DETAIL_PRODUCT, HANDLE_DETAIL, ADD_TO_CART} from './types';

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

export const handleDetail = (product) => {
    console.log("hello from cart");
    
    return {
        type: HANDLE_DETAIL,
        
    }
}

export const addToCart = (product) => {
    console.log('hello from cart')
    return {
        type: ADD_TO_CART,
        payload: product
    }
}