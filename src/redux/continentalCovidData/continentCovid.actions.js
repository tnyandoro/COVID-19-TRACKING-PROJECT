import axios from 'axios';
import { getContinent } from '../covidDataAPI';
import {
  REQUEST_COVID_DATA,
  REQUEST_COVID_DATA_SUCCESS,
  ERROR_REQUESTING_COVID_DATA,
} from './continentCovid.types';

const requestCovidData = () => ({
  type: REQUEST_COVID_DATA,
});

const requestCovidDataSucess = (data) => ({
  type: REQUEST_COVID_DATA_SUCCESS,
  payload: data,
});

const errorRequestingCovidData = (error) => ({
  type: ERROR_REQUESTING_COVID_DATA,
  payload: error,
});

const fetchCovidData = (country) => async (dispatch) => {
  dispatch(requestCovidData());
  axios.get(getContinent(country))
    .then((response) => {
      const result = Object.values(response.data);

      dispatch(requestCovidDataSucess(result));
    }).catch((error) => {
      dispatch(errorRequestingCovidData(error));
    });
};

export default fetchCovidData;
