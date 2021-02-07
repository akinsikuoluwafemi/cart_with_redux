import { FETCH_DETAIL_PRODUCT } from '../actions/types';



const initialState = {
    detailProduct: loc [],
    products: []

}

const productDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DETAIL_PRODUCT:
        return { ...state, detailProduct: action.payload };
    
        default:
            return state;
    }
}

export default productDetailReducer;