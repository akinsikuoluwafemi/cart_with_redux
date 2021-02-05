import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productDetailReducer from './'

export default combineReducers({
    products: productReducer
})