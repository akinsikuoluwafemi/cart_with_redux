import { combineReducers } from 'redux';
import { productReducer, handleDetailReducer } from './productReducer';
import productDetailReducer from './productDetailReducer';
import cartReducer from './cartReducer';
import  modalReducer from './'

export default combineReducers({
  products: productReducer,
  productDetail: productDetailReducer,
  cartItems: cartReducer,

});