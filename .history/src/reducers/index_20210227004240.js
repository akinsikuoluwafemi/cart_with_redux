import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import productDetailReducer from './productDetailReducer';
import cartReducer from './cartReducer';
import { ModalReducer } from './ModalReducer';

export default combineReducers({
  products: productReducer,
  productDetail: productDetailReducer,
  cartItems: cartReducer,
  modalOpen: ModalReducer,
});