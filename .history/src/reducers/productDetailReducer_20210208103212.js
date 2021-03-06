import { FETCH_DETAIL_PRODUCT } from '../actions/types';
import initialState from "./initialState";





const productDetailReducer = (state = initialState.produ, action) => {
    switch (action.type) {
        case FETCH_DETAIL_PRODUCT:
        return { ...state, detailProduct: action.payload };
    
        default:
            return state;
    }
}

export default productDetailReducer;