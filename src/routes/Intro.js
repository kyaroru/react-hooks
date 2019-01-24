import React from 'react';
import { Link } from 'react-router-dom';
import brownie from '../images/Brownie.svg';
import '../styles/intro.scss';

const Intro = () => (
  <div className="app-content">
    <div className="page">
      <div className="intro-title">Welcome, I am Brownie :p</div>
      <div className="intro-title">{'Let\'s talk about '}<a className="topic" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-intro.html">React Hooks</a></div>
      <img alt="brownie" className="app-logo" src={brownie} />
      <br />
      <div className="hooks">
        <Link className="app-link" to="/topic" href="/topic">Start Now !</Link>
      </div>
    </div>
  </div>
);

export default Intro;

