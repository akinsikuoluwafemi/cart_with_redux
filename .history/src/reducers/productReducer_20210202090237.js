import {FETCH_PRODUCTS } from '../actions/types';
import {storeProducts } from '../data';

const initialState = {
    products: []
}


 const productReducer = (state = initialState, action) => {
    switch(action.type){
        
            
        default:
            return state;
    }
 }

export default productReducer;