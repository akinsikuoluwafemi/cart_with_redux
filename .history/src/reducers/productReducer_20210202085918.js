import {FETCH_PRODUCTS } from '../actions/types';
import
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