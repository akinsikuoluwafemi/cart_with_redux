import {FETCH_PRODUCTS } from '../actions/types';
import {storeProducts } from '../data';
import initialState from './initialState';




export const productReducer = (state = initialState.product, action) => {
    // console.log(state)
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, products: storeProducts}
            
        default:
            return state;
    }
 }

