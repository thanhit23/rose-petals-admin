import { LOGOUT_REQUEST } from '../containers/Header/constants';
import { CHECK_TOKEN_FAILED, REDIRECT_LOGIN } from '../containers/Authenticated/constants';

const middlewareStorage = store => next => action => {
  next(action);
  store.getState();
  switch (action.type) {
    case LOGOUT_REQUEST:
      localStorage.removeItem('token');
      window.location.href = '/login';
      break;
    case CHECK_TOKEN_FAILED:
      localStorage.removeItem('token');
      window.location.href = '/login';
      break;
    case REDIRECT_LOGIN: {
      window.location.href = '/login';
      break;
    }
    default:
      break;
  }
};

export default middlewareStorage;
