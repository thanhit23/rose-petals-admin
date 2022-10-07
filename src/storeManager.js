import invariant from 'invariant';
import { isString } from 'lodash';

const get = key => {
  invariant(
    isString(key),
    '(app/storeManager) get store: Expected a valid key is String',
  );
  return JSON.parse(localStorage.getItem(key));
};

const set = (key, data) => {
  invariant(
    isString(key),
    '(app/storeManager) set store: Expected a valid store',
  );

  localStorage.setItem(key, JSON.stringify(data));
};

export { get, set };
