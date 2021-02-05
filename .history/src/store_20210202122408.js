import { createStore, compose } from "redux";
import rootReducer from './reducers';


 const store =  createStore(rootReducer, compose(window.__REDUX));
console.log(store.getState())

export default store;