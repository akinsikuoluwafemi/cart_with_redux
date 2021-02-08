import { FETCH_PRODUCTS , FETCH_DETAIL_PRODUCT, OPEN_MODAL,CLOSE_MODAL ,MODAL_PRODUCT , ADD_TO_CART, INCREAMENT, DECREAMENT} from './types';

export const fetchProducts = () => {
    return {
        type: FETCH_PRODUCTS
    }
}

export const fetchProductDetail = (product) => {
    
    return {
        type: FETCH_DETAIL_PRODUCT,
        payload: product
    }
}



export const addToCart = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}


export const openModalAction = () => {
    return {
        type: OPEN_MODAL,
    }
}

export const changeModalProductAction = (product) => {
    return {
        type: MODAL_PRODUCT,
        payload: product
    }
}


export const closeModalAction = () => {
    return {
        type: CLOSE_MODAL,
    }
}

export const IncreamentAction = (p) => {
    
}