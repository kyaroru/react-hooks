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
      <div className="title-small">
        Hi, I am Brownie from
        {' '}
        <a className="highlight" rel="noopener noreferrer" target="_blank" href="http://bearsweeper.kyaroru.com/">BearSweeper</a>
        {' '}
        :p
      </div>
      <Link className="app-link" to="/topic" href="/topic">Start Now !</Link>
    </div>
    <div className="copyright">
      ©
      {' '}
      {new Date().getFullYear()}
      {' '}
      Chiew Carol
    </div>
  </div>
);

export default Intro;
