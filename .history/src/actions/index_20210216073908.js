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
    console.log('this is increment method')
    return {
        type: INCREMENT,
        payload: product
    }
}

export const decrementAction = (product) => {
    console.log("this is decrement method");
    
    return {
        type: DECREMENT,
        payload: product
    }
} 


export const removeItemAction = (product) => {
    console.log("you removed this item");
    console.log(product)
    return {
        type: REMOVE_ITEM,
        payload: product
    }
}

export const clearCartAction = () => {
    console.log('you just cleared the cart');
    return {
        type: CLEAR_CART
    }
}


export const addTotalsAction = () => {
    let subTotal = 0;
    

    return {
      type: ADD_TOTALS,
    };
}