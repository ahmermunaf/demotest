import GettingData_Action from "./../actions/gettingData_action.js";
import Data from './../../data.json'

export default class GettingData_Middleware {

    static asyncGettingData(detail) {
        return (dispatch) => {
            var arr = []
             for(let a in Data){
                arr.push(Data[a])
             }
            dispatch(GettingData_Action.GettingData(arr))
        }
    }
}