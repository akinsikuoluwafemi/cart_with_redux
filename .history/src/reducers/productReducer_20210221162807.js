import {FETCH_PRODUCTS, RS } from '../actions/types';
import {storeProducts } from '../data';
import initialState from './initialState';




export const productReducer = (state = initialState, action) => {
    console.log(storeProducts)
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, products: storeProducts}
            
        default:
            return state;
    }
 }

