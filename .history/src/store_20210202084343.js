import { createStore } from "redux";
import rootReducer from './reducers';
import { storeProducts } from './data';

const initialState = sts;

 const store =  createStore(rootReducer, initialState);

export default store;