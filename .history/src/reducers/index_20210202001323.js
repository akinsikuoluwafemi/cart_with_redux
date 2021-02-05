import { combineReducers } from 'redux';
import productReducer from './pr'

export default combineReducers({
    product: productReducer
})