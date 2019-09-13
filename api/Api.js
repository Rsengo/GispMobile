import MapApi from './map-api';

class Api {
  constructor(baseUrl = '') {
    this.map = new MapApi(baseUrl);
  }
}

export default Api;
