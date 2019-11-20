import { all } from 'redux-saga/effects';
import { watchLogUserIn, watchFetchAllInvestmens, watchAddNewInvestmens, watchDeleteInvestment } from './authSagas';
function* rootSaga() {
  yield all([
    watchLogUserIn(),
    watchFetchAllInvestmens(),
    watchAddNewInvestmens(),
    watchDeleteInvestment()
  ]);
}

export default rootSaga;
