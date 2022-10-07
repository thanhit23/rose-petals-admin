/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import globalReducer from './containers/App/reducer';

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global: globalReducer,
    form,
    ...injectedReducers,
  });
}
