import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCovidData from '../../redux/continentalCovidData/continentCovid.actions';

const Home = () => {
  const covidData = useSelector(({ covid }) => covid);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchCovidData('africa'));
    })();
  }, []);

  return (
    <div>
      <h1>Hello Covid!</h1>
      { JSON.stringify(covidData) }
    </div>
  );
};

export default Home;
