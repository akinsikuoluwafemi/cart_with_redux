import { FETCH_PRODUCTS , FETCH_DETAIL_PRODUCT, HANDLE_DETAIL, ADD_TO_CART} from './types';

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS
    }
}

export const fetchProductDetail = (product) => {
    console.log("product is:" + product);
    
    return {
        type: FETCH_DETAIL_PRODUCT,
        payload: product
    }
}

export const handleDetail = (product) => {
    // console.log("product is:" + product);
    
    return {
        type: HANDLE_DETAIL,
        payload: product
    }
}

export const addToCart = (product) => {
    console.log('hello from add cart' + product)
    return {
        type: ADD_TO_CART,
        payload: product
    }
}