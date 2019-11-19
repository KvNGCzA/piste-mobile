import { all } from 'redux-saga/effects';
import { watchLogUserIn, watchFetchAllInvestmens, watchAddNewInvestmens } from './authSagas';
function* rootSaga() {
  yield all([
    watchLogUserIn(),
    watchFetchAllInvestmens(),
    watchAddNewInvestmens()
  ]);
}

export default rootSaga;
