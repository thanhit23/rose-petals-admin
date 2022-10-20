import produce from 'immer';

import { LOGOUT_SUCCESS } from './constants';

const middlewareStorage = (state = {}, action) =>
  produce(state, () => {
    switch (action.type) {
      case LOGOUT_SUCCESS:
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('refreshToken');
        window.location.href = '/login';
        break;
      default:
        break;
    }
  });

export default middlewareStorage;
