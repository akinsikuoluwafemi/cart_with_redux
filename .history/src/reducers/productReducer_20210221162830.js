import {FETCH_PRODUCTS, RESET_PRODUCT } from '../actions/types';
import {storeProducts } from '../data';
import initialState from './initialState';




export const productReducer = (state = initialState, action) => {
    console.log(storeProducts)
    switch (action.type) {
      case FETCH_PRODUCTS:
        return { ...state, products: storeProducts };
      case RESET_PRODUCTS:
        return { ...state, products: storeProducts };

      default:
        return state;
    }
 }

