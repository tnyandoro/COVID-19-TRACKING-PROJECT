import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import covidReducer from './covid/covid.reducer';

const rootReducer = combineReducers({
  covid: covidReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
