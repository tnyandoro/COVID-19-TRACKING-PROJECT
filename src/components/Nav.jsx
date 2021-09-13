import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { IoLogoLinkedin } from 'react-icons/io';
import './Nav.css';
import { ArrowRight } from 'react-bootstrap-icons';

export default function Nav() {
  return (
    <Router>
      <header>
        <nav className="nav">
          <ArrowRight color="royalblue" size={96} />
          <IoLogoLinkedin />
        </nav>
      </header>
      <Switch>
        <Route path="/categories" />
        <Route path="/" />
      </Switch>
    </Router>
  );
}
