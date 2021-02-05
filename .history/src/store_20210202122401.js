import { createStore, compose } from "redux";
import rootReducer from './reducers';


 const store =  createStore(rootReducer, compose(WINDO));
console.log(store.getState())

export default store;