import { SET_GLOBAL, IS_LOGGING_IN, SET_ALL_INVESTMENTS, FETCH_ALL_INVESTMENTS, IS_FETCHING_INVESTMENTS } from '../constants';

export const setGlobal = data => ({
  type: SET_GLOBAL,
  data
});

export const isLoggingIn = data => ({
  type: IS_LOGGING_IN,
  data
});

export const fetchAllInvestments = () => ({
  type: FETCH_ALL_INVESTMENTS,
});

export const setAllInvestments = data => ({
  type: SET_ALL_INVESTMENTS,
  data
});

export const isFetchingInvestments = data => ({
  type: IS_FETCHING_INVESTMENTS,
  data
});
