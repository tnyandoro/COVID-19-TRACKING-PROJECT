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
    <Container>
      <div className="details_page">
        <div className="inside">
          {
        countryCovidData.length > 0 ? countryCovidData.map(({
          confirmed, recovered, deaths, country, capital_city, abbreviation,
        }) => (
          <div className="country" key={abbreviation}>
            <h3>Covid-19 Details</h3>
            <div>
              <h4>
                Country: &nbsp;
                { country }
              </h4>
            </div>
            <div>
              <h5 className="cases">
                Comfirmed Cases: &nbsp;
                { confirmed }
              </h5>
            </div>
            <div>
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

          </div>
        )) : (
          <p>No data to display...</p>
        )
      }
        </div>
        <div>
          <p><FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
        </div>
      </div>
    </Container>

  );
}

export default Details;
