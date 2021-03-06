import { FETCH_PRODUCTS , FETCH_DETAIL_PRODUCT, OPEN_MODAL,CLOSE_MODAL ,MODAL_PRODUCT , ADD_TO_CART} from './types';

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
    console.log('hello from add cart' + product)
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

export const changeModalAction = (product) => {
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