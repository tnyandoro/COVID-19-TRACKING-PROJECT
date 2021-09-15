/* eslint-disable camelcase */
import React from 'react';
import { useSelector } from 'react-redux';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
} from 'react-bootstrap';

function Details() {
  const countryCovidData = useSelector(({ country }) => country.covidData);

  return (
    <Container className="details_page">
      <div>
        {
        countryCovidData.length > 0 ? countryCovidData.map(({
          confirmed, recovered, deaths, country, capital_city, abbreviation,
        }) => (
          <div className="country" key={abbreviation}>
            <h1>Covid-19 Details</h1>
            <h2>
              Country: &nbsp;
              { country }
            </h2>
            <h3>
              Comfirmed Cases: &nbsp;
              { confirmed }
            </h3>
            <h4>
              Deaths: &nbsp;
              { deaths }
            </h4>
            <h5>
              {' '}
              Recovered: &nbsp;
              { recovered }
            </h5>
            <h5>
              Capital: &nbsp;
              { capital_city }
            </h5>

          </div>
        )) : (
          <p>No data to display...</p>
        )
      }
      </div>
      <div>
        <p><FontAwesomeIcon icon={faArrowAltCircleRight} size="1.5x" /></p>
      </div>
    </Container>

  );
}

export default Details;
