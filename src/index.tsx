import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

const composeEnhancers = typeof window === "object" &&
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] ?
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__']({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));

ReactDOM.render(
  <Provider store={createStore(rootReducer, enhancer)}>
    <App />
  </Provider>,
  document.getElementById('root')
);