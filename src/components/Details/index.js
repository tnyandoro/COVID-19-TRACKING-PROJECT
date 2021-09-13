/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';

function Details() {
  const countryCovidData = useSelector(({ country }) => country.covidData);

  return (
    <div>
      {
        countryCovidData.length > 0 ? countryCovidData.map(({
          confirmed, recovered, deaths, country, capital_city, abbreviation,
        }) => (
          <div key={abbreviation}>
            <p>{ country }</p>
            <p>{ confirmed }</p>
            <p>{ deaths }</p>
            <p>{ recovered }</p>
            <p>{ capital_city }</p>

          </div>
        )) : (
          <p>No data to display...</p>
        )
      }
    </div>
  );
}

export default Details;
