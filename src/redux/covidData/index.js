const BASE_URL = 'https://api.covid19tracking.narrativa.com/api/2020-03-22/country/';

const getCountry = (country) => `${BASE_URL}${country}`;

export default getCountry;
