import BaseApi from '../BaseApi';
import axios from 'axios';

class MapApi extends BaseApi {
    constructor(baseUrl = '') {
        super(baseUrl);
    }

    getMapManifest() {
        // TODO:
    }
}

export default MapApi;