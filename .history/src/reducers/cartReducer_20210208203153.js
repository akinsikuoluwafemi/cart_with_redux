import { ADD_TO_CART, INCREMENT, DECREMENT, REMOVE_ITEM } from "../actions/types";
import initialState from './initialState';




const cartReducer = (state=initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        let tempArr = [...state.cartItems, action.payload];
        return { ...state, cartItems: tempArr };

      case INCREMENT:
      // return {...state, cartItems: state.cartItems.reduce() }

      case DECREMENT:
      // return { ...state, products: }

      default:
        return state;
    }
}


export default cartReducer;



