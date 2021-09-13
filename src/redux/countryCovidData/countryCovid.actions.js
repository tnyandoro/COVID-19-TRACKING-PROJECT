import axios from 'axios';
import { getCountry } from '../covidDataAPI';
import {
  REQUEST_COUNTRY_COVID_DATA,
  REQUEST_COUNTRY_COVID_DATA_SUCCESS,
  REQUEST_COUNTRY_COVID_DATA_FAILURE,
} from './countryCovid.types';

const requestCountryCovidData = () => ({
  type: REQUEST_COUNTRY_COVID_DATA,
});

const requestCountryCovidDataSuccess = (payload) => ({
  type: REQUEST_COUNTRY_COVID_DATA_SUCCESS,
  payload,
});

const requestCountryCovidDataFailure = (error) => ({
  type: REQUEST_COUNTRY_COVID_DATA_FAILURE,
  payload: error,
});

const fetchCountryData = (country) => (dispatch) => {
  dispatch(requestCountryCovidData());

  axios.get(getCountry(country))
    .then((response) => {
      dispatch(requestCountryCovidDataSuccess(response));
    }).catch((error) => {
      dispatch(requestCountryCovidDataFailure(error));
    });
};

export default fetchCountryData;
