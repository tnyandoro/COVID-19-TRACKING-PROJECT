import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import covidReducer from './continentalCovidData/continentCovid.reducer';
import countryCovidDataReducer from './countryCovidData/countryCovid.reducer';

const rootReducer = combineReducers({
  continent: covidReducer,
  country: countryCovidDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
