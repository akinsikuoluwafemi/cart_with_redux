import {FETCH_PRODUCTS , HANDLE_DETAIL} from '../actions/types';
import {storeProducts } from '../data';


const initialState = {
    detailProduct: [],
    products: []
}


export const productReducer = (state = initialState, action) => {
    console.log(state)
    switch(action.type){
        case FETCH_PRODUCTS:
            return {...state, products: storeProducts}
            
        default:
            return state;
    }
 }

 export const handleDetailReducer = (state=initialState, action) => {
     switch(action.type){
         case HANDLE_DETAIL:
             return {...state, products: state.products.find(product => product.id === action.payload.id)}
         default:
             return state;
     }
 }