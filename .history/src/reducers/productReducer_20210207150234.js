import {FETCH_PRODUCTS , HANDLE_DETAIL} from '../actions/types';
import {storeProducts } from '../data';
import initi

const initialState = {
  detailProduct: [],
  products: [],
  cartItems: [],
};


export const productReducer = (state = initialState, action) => {
    // console.log(state)
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, products: storeProducts}
            
        default:
            return state;
    }
 }

