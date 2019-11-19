import { put, takeLatest, call } from 'redux-saga/effects';
import { API_BASE_URI, API_BASE_URL } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { IS_LOGGING_IN, FETCH_ALL_INVESTMENTS }  from '../constants';
import { setGlobal, setAllInvestments, isFetchingInvestments } from '../actions/global';
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