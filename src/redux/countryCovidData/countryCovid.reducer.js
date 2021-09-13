import {
  REQUEST_COUNTRY_COVID_DATA,
  REQUEST_COUNTRY_COVID_DATA_SUCCESS,
  REQUEST_COUNTRY_COVID_DATA_FAILURE,
} from './countryCovid.types';

const initialState = {
  isLoading: false,
  data: [],
  error: '',
};

const countryCovidDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_COUNTRY_COVID_DATA:
      return {
        ...state,
        isLoading: true,
      };

    case REQUEST_COUNTRY_COVID_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: '',
      };

    case REQUEST_COUNTRY_COVID_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default countryCovidDataReducer;
