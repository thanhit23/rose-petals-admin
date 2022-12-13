import axios from 'axios';
import { map } from 'lodash';

import {
  UNAUTHORIZED,
  LOGOUT_REQUEST,
  BASE_URL,
  BAD_REQUEST_FAILED,
  BAD_REQUEST,
  SERVER_FAILED,
} from './constants';
import store from '../store';

class Service {
  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
    });
    this.instance.interceptors.response.use(
      this.handleSuccess,
      this.handleError,
    );
  }

  setHeaderDefault = headers => {
    map(headers, (value, key) => {
      this.instance.defaults.headers.common[key] = value;
    });
  };

  setBearerToken = token => {
    this.setHeaderDefault({ Authorization: `Bearer ${token}` });
  };

  handleSuccess = res => res;

  handleError = err => {
    const {
      response: { status, data },
    } = err;
    switch (status) {
      case UNAUTHORIZED:
        store.dispatch({ type: LOGOUT_REQUEST });
        break;
      case BAD_REQUEST:
        store.dispatch({ type: BAD_REQUEST_FAILED, payload: { data } });
        break;
      default:
        store.dispatch({ type: SERVER_FAILED, payload: { data } });
        break;
    }
  };

  get = (url, params = {}) => this.instance.get(url, { params });

  post = (url, body) => this.instance.post(url, body);

  patch = (url, body) => this.instance.patch(url, body);

  put = (url, body) => this.instance.put(url, body);

  delete = (url, id) => this.instance.delete(url, id);
}

export default new Service();
