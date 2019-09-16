class ApiRequest {
    constructor(success, data=null, errorMessage=null) {
        this.success = success;
        this.data = data;
        this.errorMessage = errorMessage;
    }
}