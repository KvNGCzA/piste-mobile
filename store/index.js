import AsyncStorage from '@react-native-community/async-storage';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import axios from 'axios';
import rootReducer from './reducers';
import rootSaga from './sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
AsyncStorage.getItem('jwt-token')
  .then(token => axios.defaults.headers.common['Authorization'] = token);

sagaMiddleware.run(rootSaga);

export {
  store,
  persistor,
};
