import { createStore } from "redux";
import rootReducer from './reducers';
import { storeProducts } from './data';

const initialState = storeProducts;

 const store =  createStore(rootReducer, initialState);
console.log(store)

export default store;