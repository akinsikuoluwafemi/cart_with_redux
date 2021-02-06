import { combineReducers } from 'redux';
import { productReducer, handleDetailReducer } from './productReducer';
import productDetailReducer from './productDetailReducer';



export default combineReducers({
  products: productReducer,
  productDetail: productDetailReducer,
});