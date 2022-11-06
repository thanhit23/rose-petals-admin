import axios from 'axios';
import {
  UNAUTHORIZED,
  LOGOUT_REQUEST,
  BASE_URL,
  BAD_REQUEST_FAILED,
  BAD_REQUEST,
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

  setHeader = token => {
    this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  handleSuccess = res => res;

  handleError = err => {
    const {
      response: { status, data },
    } = err;
    if (status === UNAUTHORIZED) {
      store.dispatch({ type: LOGOUT_REQUEST });
    } else if (status === BAD_REQUEST) {
      store.dispatch({ type: BAD_REQUEST_FAILED, payload: { data } });
    }
  };

  get = url => {
    return this.instance.get(url);
  };

  post = (url, body) => this.instance.post(url, body);

  patch = (url, body) => this.instance.patch(url, body);

  put = (url, body) => this.instance.put(url, body);

  delete = (url, id) => this.instance.delete(url, id);
}

export default new Service();
