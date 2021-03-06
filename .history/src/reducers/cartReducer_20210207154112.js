import { ADD_TO_CART } from "../actions/types";
import initialState from './initialState';




const cartReducer = (state=initialState, action) => {
    switch(action.type){
        
        case ADD_TO_CART:
            return { ...state, cartItems: [ ...prevItem, ...action.payload, action.payload.inCart: true, count: 1 ] };
        
        default:
            return state;
    }
}


export default cartReducer;



