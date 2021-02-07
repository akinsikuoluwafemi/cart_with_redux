import { FETCH_DETAIL_PRODUCT } from '../actions/types';



const initialState = {
    detailProduct: JSON.parse(localStorage.getItem('product')) || [],
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