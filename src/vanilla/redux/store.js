import { createStore, combineReducers } from 'redux';
import { statisticsReducer } from './statistics.redux';
import { navigationReducer } from './navigation.redux';
import { currentGameReducer } from './currentGame.redux';


const appReducer = combineReducers({
  navigation: navigationReducer,
  currentGame: currentGameReducer,
  statistics: statisticsReducer
});


export const store = createStore(
  appReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
