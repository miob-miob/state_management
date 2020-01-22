import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { getAvailableCities, getCurrentWeather } from '../services';


const reducer = (state = { lets: 'start' }, action) => state;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getCurrentWeather, getAvailableCities })))
);
