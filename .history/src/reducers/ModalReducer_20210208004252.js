import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types';
import initialState from './initialState';


export const modalReducer = (state=initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
        return { ...state, modalOpen: !state.modalOpen, modalProduct: action.payload }
    
        default:
            return state;
    
    }
}