import { FETCH_DETAIL_PRODUCT } from '../actions/types';
import { detailProduct } from "../data";



const initialState = {
    detailProduct: [],
    products: []

}

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DETAIL_PRODUCT:
        return { ...state, detailProduct: detailProduct };
    
        default:
            return state;
    }
}

export default productDetailReducer;