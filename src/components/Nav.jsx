/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { faChevronLeft, faMicrophone, faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BrowserRouter as Router, useHistory,
} from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  const history = useHistory();

  return (
    <Router>
      <header>
        <nav className="nav">
          <span onClick={() => history.goBack()}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          <h4>2019</h4>
          <h4>COVID-19</h4>
          <FontAwesomeIcon icon={faMicrophone} />
          <FontAwesomeIcon icon={faCog} />

        </nav>
      </header>
    </Router>
  );
}