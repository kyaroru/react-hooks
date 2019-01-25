import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { hotkeys } from 'react-keyboard-shortcuts';

class FooterNavBar extends PureComponent {
  hot_keys = { // eslint-disable-line
    backspace: {
      priority: 1,
      handler: () => {
        const { history } = this.props;
        if (history) {
          history.push('/topic');
        }
      },
    },
    left: { // combo from mousetrap
      priority: 1,
      handler: () => {
        const { history, prev } = this.props;
        if (history && prev) {
          history.push(prev);
        }
      },
    },
    right: { // combo from mousetrap
      priority: 1,
      handler: () => {
        const { history, next } = this.props;
        if (history && next) {
          history.push(next);
        }
      },
    },
  };

  render() {
    const { prev, next } = this.props;
    return (
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
  }
}

FooterNavBar.propTypes = {
  history: PropTypes.object,
  prev: PropTypes.string,
  next: PropTypes.string,
};

FooterNavBar.defaultProps = {
  history: null,
  prev: null,
  next: null,
};

export default hotkeys(FooterNavBar);
