import axios from 'axios';
import getCountry from '../covidData';
import {
  REQUEST_COVID_DATA,
  REQUEST_COVID_DATA_SUCCESS,
  ERROR_REQUESTING_COVID_DATA,
} from './covid.types';

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

const fetchCovidData = (country) => (dispatch) => {
  dispatch(requestCovidData());
  axios.get(getCountry(country), { mode: 'cors' })
    .then((response) => {
      console.log(response);
      dispatch(requestCovidDataSucess(response));
    }).catch((error) => {
      console.log(error);
      dispatch(errorRequestingCovidData(error));
    });
};

export default fetchCovidData;
