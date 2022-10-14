import { LOGOUT } from '../service/constants';

const middlewareStorage = store => next => action => {
  next(action);
  store.getState();
  switch (action.type) {
    case LOGOUT:
      sessionStorage.removeItem('token');
      window.location.href = '/login';
      break;
    default:
      break;
  }
};

export default middlewareStorage;
