import axios from 'axios';
import { map } from 'lodash';

import {
  UNAUTHORIZED,
  LOGOUT_REQUEST,
  BASE_URL,
  SERVER_ERROR,
} from './constants';
import store from '../store';
import { LOGIN_FAILED } from '../containers/LoginPage/constants';

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

    const { message } = data;
    switch (status) {
      case UNAUTHORIZED:
        store.dispatch({
          type: LOGIN_FAILED,
          payload: {
            message,
          },
        });
        setTimeout(() => store.dispatch({ type: LOGOUT_REQUEST }), 6000);
        break;
      case SERVER_ERROR:
        setTimeout(() => store.dispatch({ type: LOGOUT_REQUEST }), 6000);
        break;
      default:
        break;
    }
    return { data };
  };

  get = (url, params = {}) => this.instance.get(url, { params });

  post = (url, body) => this.instance.post(url, body);

  patch = (url, body) => this.instance.patch(url, body);

  put = (url, body) => this.instance.put(url, body);

  delete = (url, id) => this.instance.delete(url, id);
}

export default new Service();
