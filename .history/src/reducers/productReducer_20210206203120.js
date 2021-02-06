import {FETCH_PRODUCTS } from '../actions/types';
import {storeProducts } from '../data';

const initialState = {
    products: []
}


 const productReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, products: storeProducts}
            
        default:
            return state;
    }
 }

 productReducer;