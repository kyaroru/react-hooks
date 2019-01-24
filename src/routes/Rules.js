import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import FooterNavBar from '../components/FooterNavBar';

const code = `
// Install into your project
> npm install eslint-plugin-react-hooks@next --save-dev

// Add to ESLint Configuration
{
  "plugins": [
    // ...
    "react-hooks"
  ],
  "rules": {
    // ...
    "react-hooks/rules-of-hooks": "error"
  }
}
`;

const Rules = () => (
  <div className="app-content">
    <div className="page">
      <div className="title topic">Rules of Hooks</div>
      <div className="paragraph">
        <p>
          Only call Hooks at the
          {' '}
          <span className="highlight">top level</span>
          . (Not inside loops, conditions, or nested functions)
        </p>
        <p>
          Only call Hooks from
          {' '}
          <span className="highlight">React function components</span>
          . (Not from regular JavaScript functions)
        </p>
        <p>
How do I make sure this? Install
          {' '}
          <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://www.npmjs.com/package/eslint-plugin-react-hooks">eslint-plugin-react-hooks</a>
          {' '}
          :p
        </p>
        <div className="card highlight">
          <Highlight language="javascript">
            {code}
          </Highlight>
        </div>
      </div>
    </div>

    <div className="back-button">
      <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
    </div>
    <FooterNavBar prev="/additional" next="/byoh" />
  </div>
);

export default Rules;
