import { all } from 'redux-saga/effects';
import { watchLogUserIn } from './authSagas';
function* rootSaga() {
  yield all([
    watchLogUserIn(),
  ]);
}

export default rootSaga;
