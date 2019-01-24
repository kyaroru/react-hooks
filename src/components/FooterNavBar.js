import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const FooterNavBar = ({ prev, next }) => (
  <div className="footer">
    {prev
      && (
        <div className="prev-button">
          <Link className="app-link" to={prev}>Previous</Link>
        </div>
      )
    }
    {next
      && (
        <div className="next-button">
          <Link className="app-link" to={next}>Next</Link>
        </div>
      )
    }
  </div>
);

FooterNavBar.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
};

FooterNavBar.defaultProps = {
  prev: null,
  next: null,
};

export default FooterNavBar;
