import axios from 'axios';
import { UNAUTHORIZED, LOGOUT } from './constants';
import store from '../store';

class Service {
  constructor() {
    this.instance = axios.create();
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
      response: { status },
    } = err;
    if (status === UNAUTHORIZED) {
      store.dispatch({ type: LOGOUT });
    }
  };

  get = url => this.instance.get(url);

  post = (url, body) => this.instance.post(url, body);

  put = (url, body) => this.instance.put(url, body);

  delete = (url, id) => this.instance.delete(url, id);
}

export default new Service();
