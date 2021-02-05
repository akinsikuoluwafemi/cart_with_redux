import { createStore } from "redux";
import rootReducer from './reducers';
import { storeProducts } from './data';

const initialState = data;

 const store =  createStore(rootReducer, initialState);

export default store;