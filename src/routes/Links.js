
import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavBar from '../components/FooterNavBar';

const Links = () => (
  <div className="app-content">
    <div className="page">
      <div className="title topic">Links for Reference</div>

      <div className="hyperlink">
        Dan Abramov
        {' - '}
        <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889">Making Sense of React Hooks</a>
      </div>
      <div className="hyperlink">
        Dave Ceddia
        {' - '}
        <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://daveceddia.com/intro-to-hooks/">A Simple Intro to React Hooks</a>
      </div>
      <div className="hyperlink">
        CSS tricks
        {' - '}
        <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://css-tricks.com/intro-to-react-hooks/">Intro to React Hooks</a>
      </div>

    </div>
    <div className="back-button">
      <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
    </div>
    <FooterNavBar prev="/byoh" />
  </div>
);

export default Links;
