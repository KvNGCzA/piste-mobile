import { all } from 'redux-saga/effects';
import { watchLogUserIn, watchFetchAllInvestmens, watchAddNewInvestmens, watchDeleteInvestment, watchEditInvestment } from './authSagas';
function* rootSaga() {
  yield all([
    watchLogUserIn(),
    watchFetchAllInvestmens(),
    watchAddNewInvestmens(),
    watchDeleteInvestment(),
    watchEditInvestment()
  ]);
}

export default rootSaga;
