import React from 'react';
import ShowingPopup_Action from '../actions/showingPopup_action.js'

function ShowingPopup_Reducer(state = [], action) {
  switch (action.type) {
    case ShowingPopup_Action.PopUp:
      return action.data
    default:
      return state
  }
}
export default ShowingPopup_Reducer;