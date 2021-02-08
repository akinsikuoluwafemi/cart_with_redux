import { INCREMENT, DECREMENT } from '../actions/types';
import initialState from './initialState';





const incrementDecrementReducer = (state=initialState, action) => {
    switch(action.type){
        case INCREMENT:
            // return {...state, cartItems: state.cartItems.reduc }


        case DECREMENT:
            // return { ...state, products: }
        
        default:
            return state;
    }


}

export default incrementDecrementReducer;