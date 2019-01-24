import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavBar from '../components/FooterNavBar';

const BYOH = () => (
  <div className="app-content">
    <div className="page">
      <div className="title topic">Build your own Hooks</div>
    </div>
    <div className="back-button">
      <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
    </div>
    <FooterNavBar prev="/rules" />
  </div>
);

export default BYOH;
