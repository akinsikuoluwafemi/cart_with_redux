import { ADD_TO_CART } from "../actions/types";
import initialState from './initialState';




const cartReducer = (state=initialState, action) => {
    switch(action.type){
        
        case ADD_TO_CART:
            let tempArr = 
            return { ...state, cartItems: [ ...state.cartItems, action.payload ] };
        
        default:
            return state;
    }
}


export default cartReducer;



