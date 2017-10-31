export default class GettingData_Action {
    static Data = "Data";
    static GettingData(data) {
        return { 
            type: 'Data',
            data: data
        }
    }
}