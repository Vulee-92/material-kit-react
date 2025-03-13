import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import authReducer from './reducers/auth.reducer';
import { watchAuth } from './sagas/auth.saga';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([watchAuth()]);
}

export const store = configureStore({
  reducer: {
    auth: authReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 