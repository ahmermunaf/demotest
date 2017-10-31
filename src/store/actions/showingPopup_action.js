export default class ShowingPopup_Action {
    static PopUp = "PopUp";
    static ShowingPopup(data) {
        return { 
            type: 'PopUp',
            data: data
        }
    }

}