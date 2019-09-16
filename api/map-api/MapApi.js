import BaseApi from '../BaseApi';
import axios from 'axios';

class MapApi extends BaseApi {
    constructor(baseUrl = '') {
        super(baseUrl);
    }

    async getMapManifest() {
        // TODO:
    }
}

export default MapApi;