import { TOGGLE_SIDEBAR, LOGOUT_REQUEST, LOGOUT_SUCCESS, UPDATE_ACCOUNT, CHANGE_PASSWORD } from './constants';

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});
export const updateAccount = data => ({
  type: UPDATE_ACCOUNT,
  payload: { ...data },
});
export const changePassword = data => ({
  type: CHANGE_PASSWORD,
  payload: { ...data },
});
export const logout = () => ({
  type: LOGOUT_REQUEST,
});
export const loggedOut = () => ({
  type: LOGOUT_SUCCESS,
});
