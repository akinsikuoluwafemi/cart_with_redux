import { createStore } from "redux";
import rootReducer from './reducers';
import data from './'

const initialState = {

}

 const store =  createStore(rootReducer, initialState);

export default store;