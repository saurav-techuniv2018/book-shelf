import { createStore, combineReducers } from 'redux';
import * as reducers from '../reducers';

/* eslint-disable no-underscore-dangle */
const initStore = () =>
  createStore(
    combineReducers(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
/* eslint-enable */

export default initStore;
