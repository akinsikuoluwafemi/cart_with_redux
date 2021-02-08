import { OPEN_MODAL, CLOSE_MODAL,MODAL_PRODUCT } from '../actions/types';
import initialState from './initialState';


const modalReducer = (state=initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
        return { ...state, modalOpen: !state.modalOpen }
    
        case CLOSE_MODAL:
        return { ...state, modalOpen: !state.modalOpen }
        case MODAL_PRODUCT:
            return {...state, modalProduct: action.payload}
        default:
            return state;
    
    }
}

export default modalReducer;