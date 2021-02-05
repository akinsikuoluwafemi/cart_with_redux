import { combineReducers } from 'redux';
import productReducer from './prod'

export default combineReducers({
    product: productReducer
})