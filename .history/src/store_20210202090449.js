import { createStore } from "redux";
import rootReducer from './reducers';
import { storeProducts } from './data';


 const store =  createStore(rootReducer);
console.log(store.getState())

export default store;