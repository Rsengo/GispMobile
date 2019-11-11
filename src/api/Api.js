import { MapApi } from './map-api';
import { AuthApi } from './auth-api';

class Api {
  constructor(baseUrl = '', ldapSettins = {}) {
    this.map = new MapApi(baseUrl);
    this.auth = new AuthApi(ldapSettins);
  }
}

export default Api;
