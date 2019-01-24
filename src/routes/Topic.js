import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/topic.scss';

const Topic = () => (
  <div className="app-content">
    <div className="page">
      <div className="topic-list">
        <Link className="app-link" to="/what" href="/what">What is Hooks?</Link>
        <Link className="app-link" to="/why" href="/why">Why Hooks?</Link>
        <Link className="app-link" to="/state" href="/state">State Hook</Link>
        <Link className="app-link" to="/effect" href="/effect">Effect Hook</Link>
        <Link className="app-link" to="/additional" href="/additional">Additional Hooks</Link>
        <Link className="app-link" to="/rules" href="/rules">Rules of Hook</Link>
        <Link className="app-link" to="/byoh" href="/rules">Build Your Own Hooks</Link>
      </div>
    </div>
    <div className="back-button">
      <Link className="app-link" to="/" href="/">⬅ Back to Main</Link>
    </div>
  </div>
);

export default Topic;

