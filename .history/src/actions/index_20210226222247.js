import {
  FETCH_PRODUCTS,
  FETCH_DETAIL_PRODUCT,
  OPEN_MODAL,
  CLOSE_MODAL,
  MODAL_PRODUCT,
  ADD_TO_CART,
  INCREMENT,
  DECREMENT,
  REMOVE_ITEM,
  CLEAR_CART,
    ADD_TOTALS,
} from "./types";

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

export const incrementAction = (product) => {
    return {
        type: INCREMENT,
        payload: product
    }
}

export const decrementAction = (product) => {
    
    return {
        type: DECREMENT,
        payload: product
    }
} 


export const removeItemAction = (product) => {
    return {
        type: REMOVE_ITEM,
        payload: product
    }
}

export const clearCartAction = () => {
    return {
        type: CLEAR_CART
    }
}


export const addTotalsAction = () => {
    return {
      type: ADD_TOTALS,
    };
}