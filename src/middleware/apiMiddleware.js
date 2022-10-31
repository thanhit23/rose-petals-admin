import { LOGOUT } from '../service/constants';
import { CHECK_TOKEN_FAILED } from '../containers/Authenticated/constants';

const middlewareStorage = store => next => action => {
  next(action);
  store.getState();
  switch (action.type) {
    case LOGOUT:
      sessionStorage.removeItem('token');
      window.location.href = '/login';
      break;
    case CHECK_TOKEN_FAILED:
      sessionStorage.removeItem('token');
      window.location.href = '/login';
      break;
    default:
      break;
  }
};

export default middlewareStorage;
