import { OPEN_MODAL } from '../actions/types';
import initialState from './initialState';


export const modalReducer = (state=initialState, action) => {
    switch(action.type){
        return { ...state, modalOpen: !state.modalOpen }
    
    
    }
}