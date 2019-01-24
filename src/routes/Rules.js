import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavBar from '../components/FooterNavBar';

const Rules = () => (
  <div className="app-content">
    <div className="page">
      <div className="topic">Rules of Hooks</div>
      <div className="paragraph">
        <p>Only call Hooks at the <span className="highlight">top level</span>. (Not inside loops, conditions, or nested functions)</p>
        <p>Only call Hooks from <span className="highlight">React function components</span>. (Not from regular JavaScript functions)</p>
      </div>
    </div>

    <div className="back-button">
      <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
    </div>
    <FooterNavBar prev="/additional" next="/byoh" />
  </div>
);

export default Rules;

