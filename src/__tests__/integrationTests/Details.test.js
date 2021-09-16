import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Details from '../../components/Details';

const theStore = {
  continent: {
    isLoading: false,
    covidData: [],
    error: '',
  },

  country: {
    covidData: [],
    error: '',
  },
};

const mockStore = configureStore();
const store = mockStore(theStore);

describe('Homepage', () => {
  it('Renders the Homepage successfully', () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
  });

  // it('Renders the output consistently to the DOM', () => {
  //   const test = renderer.create(
  //     <Provider>
  //       <Details />
  //     </Provider>,
  //   ).toJSON();

  //   expect(test).toMatchSnapshot();
  // });
});
