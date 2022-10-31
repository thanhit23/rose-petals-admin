import produce from 'immer';

import { UPDATE_USER_SUCCESS } from './constants';

const addUserReducer = (state = {}, action) =>
  produce(state, () => {
    switch (action.type) {
      case UPDATE_USER_SUCCESS: {
        window.location.href = '/admin/users';
        break;
      }
      default:
        break;
    }
  });

export default addUserReducer;
