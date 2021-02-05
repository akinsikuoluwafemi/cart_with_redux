import {FETCH_PRODUCTS } from '../actions/types';
import {storeProducts } from '../data';

const initialState = {
    products: storeProducts
}


 const productReducer = (state, action) => {
    switch(action.type){
        
            
        default:
            return state;
    }
 }

export default productReducer;