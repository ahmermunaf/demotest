import ShowingPopup_Action from "./../actions/showingPopup_action.js";

export default class ShowingPopup_middleware {

    static asyncShowingPopup(detail) {
        return (dispatch) => {
            dispatch(ShowingPopup_Action.ShowingPopup(data));
        }
    }
}
