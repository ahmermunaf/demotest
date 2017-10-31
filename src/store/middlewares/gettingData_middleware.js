import GettingData_Action from "./../actions/gettingData_action.js";
export default class GettingData_Middleware {

    static asyncGettingData(detail) {
        return (dispatch) => {
            dispatch(GettingData_Action.GettingData(data))
        }
    }
}