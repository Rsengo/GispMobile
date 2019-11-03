import ApiResponse from './ApiResponse';

const SUCCESS_RESPONSE = 'success';
const ERROR_MESSAGE = 'Ошибка при загрузке данных';

class BaseApi {
    constructor(baseUrl = '') {
        this._baseUrl = baseUrl;
    }

    async doRequest(requestFunc, url, params) {
        const response = await requestFunc(url, ...params);
        const { status: responseStatus, data : responseBody } = response;
        const { status, data } = responseBody;
        const success = responseStatus === 200 && status === SUCCESS_RESPONSE;
        
        if (success) {
            return new ApiResponse(success, data=data);
        }

        return new ApiResponse(success, errorMessage=ERROR_MESSAGE);
    }
}

export default BaseApi;