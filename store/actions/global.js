import { SET_GLOBAL, IS_LOGGING_IN } from '../constants';

export const setGlobal = data => ({
  type: SET_GLOBAL,
  data
});

export const isLoggingIn = data => ({
  type: IS_LOGGING_IN,
  data
});
