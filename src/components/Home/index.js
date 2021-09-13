/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import {
  Container, Col, Row, Form, Card, Button,
} from 'react-bootstrap';
import ClipLoader from 'react-spinners/ClipLoader';
import fetchCovidData from '../../redux/continentalCovidData/continentCovid.actions';
import fetchCountryData from '../../redux/countryCovidData/countryCovid.actions';
import './Index.css';

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
        <Row>
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
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>{ country }</Card.Title>
                          <Card.Text>
                            <span>{capital_city}</span>
                            {' '}
                            &nbsp;
                            <span>{population}</span>
                          </Card.Text>
                          <Button type="button" onClick={() => dispatch(fetchCountryData(country))}>
                            <Link to={`/country/${country}`} className="text-light">More Details</Link>
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
