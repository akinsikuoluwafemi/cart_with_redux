import { ADD_TO_CART } from "../actions/types";
import initialState from './initialState';




const cartReducer = (state=initialState, action) => {
    switch(action.type){
        
        case ADD_TO_CART:
            let index = state.products
            let tempArr = [...state.cartItems, action.payload];

            return { ...state, cartItems: tempArr };
        
        default:
            return state;
    }
}


export default cartReducer;



