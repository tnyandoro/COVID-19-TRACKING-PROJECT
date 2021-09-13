import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './Nav.css';

export default function Nav() {
  return (
    <Router>
      <header>
        <nav className="nav">
          Navigation Bar
        </nav>
      </header>
    </Router>
  );
}
