import {
  SET_GLOBAL, IS_LOGGING_IN, SET_ALL_INVESTMENTS, FETCH_ALL_INVESTMENTS, IS_FETCHING_INVESTMENTS,
  ADD_NEW_INVESTMENT, ATTACH_NEW_INVESTMENT, DETACH_INVESTMENT, DELETE_INVESTMENT, EDIT_INVESTMENT,
  UPDATE_INVESTMENT
} from '../constants';

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

export const addNewInvestment = data => ({
  type: ADD_NEW_INVESTMENT,
  data
});

export const attachNewInvestment = data => ({
  type: ATTACH_NEW_INVESTMENT,
  data
});

export const deleteInvestment = data => ({
  type: DELETE_INVESTMENT,
  data
});

export const detachInvestment = data => ({
  type: DETACH_INVESTMENT,
  data
});

export const editInvestment = data => ({
  type: EDIT_INVESTMENT,
  data
});

export const updateInvestment = data => ({
  type: UPDATE_INVESTMENT,
  data
});

export default {
  setGlobal,
  isLoggingIn,
  fetchAllInvestments,
  setAllInvestments,
  isFetchingInvestments,
  addNewInvestment,
  attachNewInvestment,
  deleteInvestment,
  detachInvestment,
  editInvestment,
  updateInvestment
};
