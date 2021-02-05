import { combineReducers } from 'redux';
import productReducer from './'

export default combineReducers({
    product: productReducer
})