import { ADD_TO_CART, INCREMENT, DECREMENT, REMOVE_ITEM, CLEAR_CART } from "../actions/types";
import initialState from './initialState';




const cartReducer = (state=initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        let tempArr = [...state.cartItems, action.payload];
        return { ...state, cartItems: tempArr };

      case INCREMENT:
        co
        return { ...state, count: state.cartItems.map(item => parseInt(item.count) + 1) };

      case DECREMENT:

        return { ...state, count: state.cartItems.map(item => parseInt(item.count) - 1) };


        case REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload)}

        case CLEAR_CART:
            return {...state, cartItems: []}

      default:
        return state;
    }
}


export default cartReducer;



