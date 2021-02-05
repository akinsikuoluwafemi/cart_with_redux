import { combineReducers } from 'redux';
import productReducer from './productReducer';
import 

export default combineReducers({
    products: productReducer
})