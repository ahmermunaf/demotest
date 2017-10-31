import React from 'react';
import GettingData_Action from '../actions/gettingData_action.js'

function GettingData_Reducer(state = [], action) {
  switch (action.type) {
    case GettingData_Action.Data:
      return action.data
    default:
      return state
  }
}
export default GettingData_Reducer;