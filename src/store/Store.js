import React from 'react';
import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider as StoreProvider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { createLogger } from 'redux-logger';

import rootReducer from './reducers';

// const loggerMiddleware = createLogger();

const preloadedState = {};
const middlewares = [thunkMiddleware]; // loggerMiddleware
const middlewareEnhancer = composeWithDevTools(applyMiddleware(...middlewares));

const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

const store = createStore(rootReducer, preloadedState, composedEnhancers);

const Provider = props => {
  const { children } = props;
  return <StoreProvider store={store}>{children}</StoreProvider>;
};

export default Provider;
