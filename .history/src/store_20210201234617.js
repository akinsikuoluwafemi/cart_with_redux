import { createStore } from "redux";
import root from './'
const initialState = {}

 const store =  createStore(rootReducer, initialState);

export default store;