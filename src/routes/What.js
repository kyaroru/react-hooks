import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavBar from '../components/FooterNavBar';

const What = ({ history }) => (
  <div className="app-content">
    <div className="page">
      <div className="title topic">What is Hooks?</div>
      <div className="paragraph">
        <p>
          An upcoming feature that lets you use state and other React features
          {' '}
          <span className="highlight">without writing a class.</span>
        </p>
        <p>
          Currently in React
          {' '}
          <span className="highlight">v16.8.0-alpha.1</span>
        </p>
        <p>Completely opt-in - Can try in new components without rewriting existing code</p>
        <p>100% backwards-compatible - Don’t contain any breaking changes</p>
      </div>
      <div className="back-button">
        <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
      </div>
    </div>
    <FooterNavBar next="/why" history={history} />
  </div>
);

export default What;
