import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import appReducer from '../reducers';
import appSaga from '../sagas';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(appReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(appSaga);
  return store;
}
