import { ADD_TO_CART, INCREMENT, DECREMENT, REMOVE_ITEM, CLEAR_CART, ADD_TOTALS, FETCH_PRODUCTS } from "../actions/types";
import initialState from './initialState';
import { storeProducts } from '../data';



const cartReducer = (state=initialState, action) => {
  // console.log(state)  
  switch (action.type) {
      case ADD_TO_CART:
        let tempArr = [...state.cartItems, action.payload];
        return { ...state, cartItems: tempArr };

    case FETCH_PRODUCTS:
        return { ...state, products: storeProducts };
    
      case INCREMENT:
        console.log(state)
        let tempCount = state.cartItems.map((item) => parseInt(item.count) + 1);
        console.log( tempCount)
        return { ...state, count: tempCount };

      case DECREMENT:

        return { ...state, count: state.cartItems.map(item => parseInt(item.count - 1)) };


        case REMOVE_ITEM:
            return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload)}

    case CLEAR_CART:
      console.log(state)
        return { ...state, cartItems: [], products: state.products.map(item => item.inCart = false), cart }
      
      case ADD_TOTALS:
        let subTotal = 0;
        state.cartItems.map(item => (subTotal += item.total));
        console.log('subtotal is: ' + subTotal)
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        return { ...state, cartSubTotal: subTotal, cartTotal: total, cartTax: tax }

      default:
        return state;
    }
}


export default cartReducer;



