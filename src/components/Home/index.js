import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchCovidData from '../../redux/continentalCovidData/continentCovid.actions';

const Home = () => {
  const continentalCovidData = useSelector(({ continent }) => continent);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(fetchCovidData('africa'));
    })();
  }, []);

  return (
    <div>
      <h1>Hello Covid!</h1>
      { JSON.stringify(continentalCovidData) }
    </div>
  );
};

export default Home;
