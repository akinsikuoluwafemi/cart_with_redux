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
      
      // let tempCartArr = state.cartItems.find(item => item.id === action.payload)
      // console.log(tempCartArr)
      // tempCartArr.count = tempCartArr.count + 1;
      // tempCartArr.total = tempCartArr.count * tempCartArr.price;

      let tempCart = [...state.cartItems]

      


        return { ...state, cartItems: tempCart  };

      case DECREMENT:

        return { ...state, cartItems: state.cartItems.map(item => item.count - 1) };


    case REMOVE_ITEM:
      console.log(action.payload)
      let removedProduct = state.products.find(item => {
        return item.id === action.payload
      })

        let product = removedProduct
      product.inCart = false;
      product.count = 0;
      product.total = 0;

        return {...state, cartItems: state.cartItems.filter(item => item.id !== action.payload)}

    case CLEAR_CART:
      console.log(state)
        return { ...state, cartItems: [], products: state.products.map(item => item.inCart = false), cartSubTotal: 0, cartTax: 0, cartTotal: 0 }
      
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



