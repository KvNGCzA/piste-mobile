import { all } from 'redux-saga/effects';
import { watchLogUserIn, watchFetchAllInvestmens } from './authSagas';
function* rootSaga() {
  yield all([
    watchLogUserIn(),
    watchFetchAllInvestmens()
  ]);
}

export default rootSaga;
