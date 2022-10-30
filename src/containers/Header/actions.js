import { TOGGLE_SIDEBAR, LOGOUT_REQUEST, LOGOUT_SUCCESS } from './constants';

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});
export const logout = () => ({
  type: LOGOUT_REQUEST,
});
export const loggedOut = () => ({
  type: LOGOUT_SUCCESS,
});
