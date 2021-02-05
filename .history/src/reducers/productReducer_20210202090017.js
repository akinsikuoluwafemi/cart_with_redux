import {FETCH_PRODUCTS } from '../actions/types';
import {storeProducts } from '../data';

const initialState = {
    products: storeProducts
}


export default const productReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:

            
        default:
            return state;
    }
}