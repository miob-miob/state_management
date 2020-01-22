import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { getAvailableCities, getCurrentWeather  } from '../services';

const initState = {
  data: null,
  loading: false,
  error: null,
  kunda: 'prezident'
};

const CITIES_LOADING = 'CITIES_LOADING';
const CITIES_DONE = 'CITIES_DONE';
const CITIES_ERROR = 'CITIES_ERROR';

const reducer = (state = initState, action) => {
  switch (action.type) {
    case CITIES_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        data: null
      };
    case CITIES_DONE:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case CITIES_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload
      };

    default:
      return state;
  }
};

const citiesLoading = () => ({
  type: CITIES_LOADING
});

const citiesDone = (citiesData) => ({
  type: CITIES_DONE,
  payload: citiesData
});

const citiesError = (errorObject) => ({
  type: CITIES_ERROR,
  payload: `${errorObject}`
});


export const loadCities = () => async (dispatch, getState) => {
  dispatch(citiesLoading());

  let data;
  try {
    data = await getAvailableCities();
  } catch (e) {
    return dispatch(citiesError(e));
  }
  return dispatch(citiesDone(data));
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  undefined,
  composeEnhancers(applyMiddleware(thunk.withExtraArgument({ getCurrentWeather, getAvailableCities })))
);
