import { ADD_TO_CART } from "../actions/types";
import initialState from './initialState';




const cartReducer = (state=initialState, action) => {
    switch(action.type){
        
        case ADD_TO_CART:
            let tempProducts = [...state.products]

            let index = tempProducts.indexOf([action.payload]);
            const product = tempProducts[index];

            let tempArr = [...state.cartItems, product];

            return { ...state, cartItems: tempArr };
        
        default:
            return state;
    }
}


export default cartReducer;



