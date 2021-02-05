import { combineReducers } from 'redux';
import productReducer from './produ'

export default combineReducers({
    product: productReducer
})