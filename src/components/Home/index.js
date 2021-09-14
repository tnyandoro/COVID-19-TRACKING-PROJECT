/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import {
  Container, Col, Row, Form, Card, Button,
} from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fetchCovidData from '../../redux/continentalCovidData/continentCovid.actions';
import fetchCountryData from '../../redux/countryCovidData/countryCovid.actions';
import './Index.css';
import covid from '../covid.png';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Home = () => {
  const continentalCovidData = useSelector(({ continent }) => continent.covidData);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [region, setRegion] = useState('africa');

  useEffect(() => {
    (async () => {
      await dispatch(fetchCovidData(region));
      setIsLoading(true);
    })();
  }, [region]);

  return (
    <div className="main">
      <Container>
        <Row className="title">
          <Col xs={6}>
            <img src={covid} alt="covid" className="img" />
          </Col>
          <Col xs={6} className="regionName">
            <h1 className="region">{region.toUpperCase()}</h1>
          </Col>
        </Row>
        <Row className="my-3">
          <Col xs={12}>
            <Form>
              <Form.Group>
                <Form.Select value={region} arial-label="Select region" onChange={(e) => setRegion(e.target.value)}>
                  <option>Select region</option>
                  <option value="africa">Africa</option>
                  <option value="asia">Asia</option>
                  <option value="europe">Europe</option>
                  <option value="australia">Australia</option>
                  <option value="north america">North America</option>
                  <option value="south america">South America</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {
          !isLoading ? (<ClipLoader color="green" loading={isLoading} css={override} size={150} />) : (
            <Row>
              {
                continentalCovidData && continentalCovidData.map((data) => {
                  const { country, population, capital_city } = data.All;
                  return (
                    <Col className="card" xs={6} md={3} key={data.abbreviation}>
                      <Card>
                        <Card.Body>
                          <Card.Title>
                            Country: &nbsp;
                            { country }
                          </Card.Title>
                          <Card.Text>
                            <span>
                              {' '}
                              Capital City: &nbsp;
                              {capital_city}
                            </span>
                            {' '}
                            &nbsp;
                            <br />
                            <span>
                              {' '}
                              Population: &nbsp;
                              {population}
                            </span>
                          </Card.Text>
                          <Button className="btn" type="button" onClick={() => dispatch(fetchCountryData(country))}>
                            <Link to={`/country/${country}`} className="text-light"><FontAwesomeIcon icon={faArrowAltCircleRight} /></Link>
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })
              }
            </Row>
          )
        }
      </Container>
    </div>
  );
};

export default Home;