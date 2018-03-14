import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState = {}) => {
  const middlewares = [
    sagaMiddleware,
  ];

  const enhancers = [
    applyMiddleware(...middlewares),
  ];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    process.env.NODE_ENV === 'development' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;
  /* eslint-enable */

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV === 'development') {
    if (module.hot) {
      module.hot.accept('./reducer', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return store;
};

export default configureStore;
