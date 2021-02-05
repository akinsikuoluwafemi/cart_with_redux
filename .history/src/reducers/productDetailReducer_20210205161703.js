import { FETCH_DETAIL_PRODUCTS } from '../actions/types';
import { detailProduct } from "../data";


const initialState = {
    detailProduct: []
}

const productDetailReducer = (state = initialState, action) => {
    switch(action.type){
        return { ...state, detailProduct: detailProduct };
    
        default:
            return state;
    }
}

export default productDetailReducer;