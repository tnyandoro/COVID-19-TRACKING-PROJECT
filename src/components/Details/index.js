import React from 'react';
import { useSelector } from 'react-redux';

function Details() {
  const countryCovidData = useSelector(({ country }) => country.covidData);

  return (
    <div>
      {
        countryCovidData.length > 0 ? (
          <div>{JSON.stringify(countryCovidData)}</div>
        ) : (
          <p>No data to display...</p>
        )
      }
    </div>
  );
}

export default Details;
