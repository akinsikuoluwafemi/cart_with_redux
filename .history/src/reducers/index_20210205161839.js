import { combineReducers } from 'redux';
import productReducer from './productReducer';
import productDetailReducer from './productDetailReducer';



export default combineReducers({
    products: productReducer
})