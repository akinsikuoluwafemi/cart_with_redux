import { createStore } from "redux";
import rootReducer from './reducers';
import { storeProducts } from './data';

const initialState = store;

 const store =  createStore(rootReducer, initialState);

export default store;