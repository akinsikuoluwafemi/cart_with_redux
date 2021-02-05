import { createStore, compose } from "redux";
import rootReducer from './reducers';


 const store =  createStore(rootReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__));
console.log(store.getState())

export default store;