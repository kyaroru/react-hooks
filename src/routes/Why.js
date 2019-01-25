import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FooterNavBar from '../components/FooterNavBar';

const Why = ({ history }) => (
  <div className="app-content">
    <div className="page">
      <div className="title topic">Why Hooks?</div>
      <div className="paragraph">
        <p>
          Hooks allow you to
          {' '}
          <span className="highlight">reuse stateful logic</span>
          {' '}
          without changing your component hierarchy. (HOC / render props require restructure of components)
        </p>
        <p>Hooks let you split one component into smaller functions based on what pieces are related rather than forcing a split based on lifecycle methods</p>
        <p>
          Dan Abramov - Adopting Hooks could
          {' '}
          <span className="highlight">reduce your bundle size</span>
          {' '}
          because code using Hooks tends to
          {' '}
          <span className="highlight">minify better</span>
          {' '}
          than equivalent code using classes
        </p>
        <p>
          Dave Ceddia - One nice thing about extracting the state like this is that you can
          {' '}
          <span className="highlight">group related logic and behavior together</span>
          .
        </p>
      </div>
    </div>
    <div className="back-button">
      <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
    </div>
    <FooterNavBar prev="/what" next="/state" history={history} />
  </div>
);

Why.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Why;
