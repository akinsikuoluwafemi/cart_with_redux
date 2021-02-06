import { FETCH_DETAIL_PRODUCT } from '../actions/types';
import { detailProduct } from "../data";
import { state } from './state';



const initialState = {
    detailProduct: []
}

const productDetailReducer = (state = stainitialState, action) => {
    switch (action.type) {
        case FETCH_DETAIL_PRODUCT:
        return { ...state, detailProduct: detailProduct };
    
        default:
            return state;
    }
}

export default productDetailReducer;