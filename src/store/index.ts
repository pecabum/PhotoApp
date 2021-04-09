import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import imageSaga from './images/saga';
import imageReducer from '../store/images/slice';

function* rootSaga() {
  yield all([fork(imageSaga)]);
}

export const rootReducers = combineReducers({
  images: imageReducer,
});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store
const store = createStore(rootReducers, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);

export default store;
