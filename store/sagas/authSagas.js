import { put, takeLatest, call } from 'redux-saga/effects';
import { API_BASE_URI, API_BASE_URL } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { IS_LOGGING_IN, FETCH_ALL_INVESTMENTS, ADD_NEW_INVESTMENT, DELETE_INVESTMENT, EDIT_INVESTMENT }  from '../constants';
import { updateInvestment, setGlobal, setAllInvestments, isFetchingInvestments, attachNewInvestment, detachInvestment } from '../actions/global';
import reactotron from 'reactotron-react-native';

let errors;

export function* logUserIn(action) {
  try {
    const { data: { token, user, overview } } = yield call(axios.post, `${API_BASE_URL}/auth/login`, { ...action.data });
    AsyncStorage.setItem('jwt-token', token);
    axios.defaults.headers.common['Authorization'] = token;
    yield put(setGlobal({ isLoggedIn: true, user, overview }));
    action.data.navigate('HomeScreen');
    action.data.setIsOwner();
  } catch (error) {
    console.log(error.response, action)
    errors = error.response
      ? error.response.data.message
      : 'Network error, please try again!';
  }
  yield put(setGlobal({ isLoading: false, errors }));
}

export function* watchLogUserIn() {
  yield takeLatest(IS_LOGGING_IN, logUserIn);
}

export function* fetchAllInvestments(action) {
  try {
    const { data: { overview, investments } } = yield call(axios.get, `${API_BASE_URL}/user/myinvestments`);
    yield put(setGlobal({ overview }));
    yield put(setAllInvestments({ investments }));
  } catch (error) {
    reactotron.log(error, action)
    errors = error.response
      ? error.response.data.message
      : 'Network error, please try again!';
  }
  yield put(isFetchingInvestments({ isFetching: false }));
  yield put(setGlobal({ errors }));
}

export function* watchFetchAllInvestmens() {
  yield takeLatest(FETCH_ALL_INVESTMENTS, fetchAllInvestments);
}

export function* addNewInvestment(action) {
  try {
    const { data: { overview, investment } } = yield call(axios.post, `${API_BASE_URL}/user/investment`, action.data.investment);
    yield put(setGlobal({ overview }));
    yield put(attachNewInvestment(investment))
    action.data.toggleAddNewInvestmentModal();
  } catch (error) {
    reactotron.log(error, action)
    errors = error.response
      ? error.response.data.message
      : 'Network error, please try again!';
  }
  yield put(setGlobal({ errors }));
}

export function* watchAddNewInvestmens() {
  yield takeLatest(ADD_NEW_INVESTMENT, addNewInvestment);
}

export function* deleteInvestment(action) {
  try {
    const { data: { overview } } = yield call(axios.delete, `${API_BASE_URL}/user/investment/${action.data.investmentId}`);
    yield put(setGlobal({ overview }));
    yield put(detachInvestment(action.data))
    action.data.toggleModal();
  } catch (error) {
    reactotron.log(error, action)
    errors = error.response
      ? error.response.data.message
      : 'Network error, please try again!';
  }
  yield put(setGlobal({ errors }));
}

export function* watchDeleteInvestment() {
  yield takeLatest(DELETE_INVESTMENT, deleteInvestment);
}

export function* editInvestment(action) {
  try {
    const { data: { overview, investment } } = yield call(axios.put, `${API_BASE_URL}/user/investment/${action.data.investmentId}`, action.data.investment);
    yield put(setGlobal({ overview }));
    yield put(updateInvestment(investment))
    action.data.toggleEditedInvestmentModal();
  } catch (error) {
    reactotron.log(error, action)
    errors = error.response
      ? error.response.data.message
      : 'Network error, please try again!';
  }
  yield put(setGlobal({ errors }));
}

export function* watchEditInvestment() {
  yield takeLatest(EDIT_INVESTMENT, editInvestment);
}