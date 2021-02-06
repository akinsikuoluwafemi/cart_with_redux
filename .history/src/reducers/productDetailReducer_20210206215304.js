import { FETCH_DETAIL_PRODUCT } from '../actions/types';
import { detailProduct } from "../data";



const initialState = {
    detailProduct: [],
    products: []

}

const productDetailReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {
        case FETCH_DETAIL_PRODUCT:
        return { ...state, detailProduct: state.products.find(product => product.id === action.payload.id) };
    
        default:
            return state;
    }
}

export default productDetailReducer;