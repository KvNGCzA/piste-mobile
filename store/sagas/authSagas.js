import { put, takeLatest, call } from 'redux-saga/effects';
import { API_BASE_URL } from 'react-native-dotenv';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
import { IS_LOGGING_IN }  from '../constants';
import { setGlobal } from '../actions/global';
import reactotron from 'reactotron-react-native';

let errors = '';

export function* logUserIn(action) {
  try {
    const { data: { token, user, overview } } = yield call(axios.post, `${API_BASE_URL}/auth/login`, { ...action.data });
    AsyncStorage.setItem('jwt-token', token);
    yield put(setGlobal({ isLoggedIn: true, user, overview }));
    action.data.navigate('HomeScreen');
  } catch (error) {
    errors = error.response.data.message;
  }
  yield put(setGlobal({ isLoading: false, errors }));
}

export function* watchLogUserIn() {
  yield takeLatest(IS_LOGGING_IN, logUserIn);
}
