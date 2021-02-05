import {FETCH_PRODUCTS } from '../actions/types';
import {storeProducts } from '../data';

const initialState = {
    products: 
}


const productReducer = (state, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:

            
        default:
            return state;
    }
}