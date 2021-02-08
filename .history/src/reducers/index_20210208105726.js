import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import productDetailReducer from './productDetailReducer';
import cartReducer from './cartReducer';
import modalReducer from './modalReducer';

export default combineReducers({
  products: productReducer,
  productDetail: productDetailReducer,
  cartItems: cartReducer,
  modalOpen: modalReducer,
  modalProduct: detailProduct,
});