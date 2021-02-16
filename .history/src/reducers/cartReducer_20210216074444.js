import { ADD_TO_CART, INCREMENT, DECREMENT, REMOVE_ITEM, CLEAR_CART, ADD_TOTALS } from "../actions/types";
import initialState from './initialState';




const cartReducer = (state=initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        let tempArr = [...state.cartItems, action.payload];
        return { ...state, cartItems: tempArr };

      case INCREMENT:
        console.log(state)
        return { ...state, count: state.cartItems.map(item => parseInt(item.count) + 1) };

      case DECREMENT:

        return { ...state, count: state.cartItems.map(item => parseInt(item.count) - 1) };


        case REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload)}

        case CLEAR_CART:
        return { ...state, cartItems: [] }
      
      case ADD_TOTALS:
        let subTotal = 0;
        return {...state, cartSubTotal: state.map(item => (subt)}

      default:
        return state;
    }
}


export default cartReducer;



