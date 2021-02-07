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
        return { ...state, detailProduct: actio };
    
        default:
            return state;
    }
}

export default productDetailReducer;