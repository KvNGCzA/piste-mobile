import { put, takeLatest, call } from 'redux-saga/effects';
// import { REACT_APP_API_URL } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios/index';
import { IS_LOGGING_IN }  from '../constants';
import { setGlobal } from '../actions/global';

let errors = {};

export function* logUserIn(action) {
  try {
    const { data: { token, data } } = yield call(axios.post, `${REACT_APP_API_URL}/auth/login`, { ...action.data });
    AsyncStorage.setItem('jwt-token', token);
    yield put(setGlobal({ isLoggedIn: true, user: data }));
  } catch (error) {
    console.log(error.response, action);
    errors = error.response.data.errors;
  }
  yield put(setGlobal({ isLoading: false, errors }));
}

export function* watchLogUserIn() {
  yield takeLatest(IS_LOGGING_IN, logUserIn);
}
