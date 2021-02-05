import { createStore } from "redux";
import root from './reducers'
const initialState = {}

 const store =  createStore(rootReducer, initialState);

export default store;