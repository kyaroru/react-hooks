import React from 'react';
import { Link } from 'react-router-dom';
import brownie from '../images/Brownie.svg';

const Intro = () => (
  <div className="app-content">
    <div className="page">
      <div className="main-title">
        Introduction to
        {' '}
        <a className="topic" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a>
      </div>
      <img alt="brownie" className="app-logo" src={brownie} />
      <br />
      <div className="title">I am Brownie :p</div>
      <Link className="app-link" to="/topic" href="/topic">Start Now !</Link>
    </div>
  </div>
);

export default Intro;
