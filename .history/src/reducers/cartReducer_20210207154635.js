import { ADD_TO_CART } from "../actions/types";
import initialState from './initialState';




const cartReducer = (state=initialState, action) => {
    switch(action.type){
        
        case ADD_TO_CART:
            return { ...state, cartItems: [ ...state.cartItems, action.payload, state.productsinCart: true ] };
        
        default:
            return state;
    }
}


export default cartReducer;


