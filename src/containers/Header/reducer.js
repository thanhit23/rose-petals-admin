import produce from 'immer';

import { LOGOUT_SUCCESS } from './constants';

const middlewareStorage = (state = {}, action) =>
  produce(state, () => {
    switch (action.type) {
      case LOGOUT_SUCCESS:
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/login';
        break;
      default:
        break;
    }
  });

export default middlewareStorage;
