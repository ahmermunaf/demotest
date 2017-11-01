import React from 'react';
import { createStore } from 'redux';
import {combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import GettingData_Reducer from './reducers/gettingData_reducer.js';

const middleware = applyMiddleware(thunk);
var combineReducer=combineReducers({
  GettingData_Reducer,
})
let store = createStore(combineReducer,middleware);
export default store;