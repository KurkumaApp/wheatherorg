import {
  configureStore as configureStoreOriginal,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import searchReducer from '_components/organisms/Search/redux';
import homePageReducer from '_components/pages/HomePage/redux';

import { watcherSaga } from './sagas/rootSaga';

const configureStore = () => {
  const middleware = getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
    thunk: false,
  });

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware, logger];

  const store = configureStoreOriginal({
    reducer: {
      search: searchReducer,
      homePage: homePageReducer,
    },
    middleware: [...middleware, ...middlewares],
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(watcherSaga);

  return store;
};

export const store = configureStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
