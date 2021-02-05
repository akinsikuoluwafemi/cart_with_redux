import { createStore } from "redux";
import rootReducer from './reducers';
import data from './data'

const initialState = {

}

 const store =  createStore(rootReducer, initialState);

export default store;