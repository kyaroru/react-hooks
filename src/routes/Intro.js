import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { hotkeys } from 'react-keyboard-shortcuts';
import brownie from '../images/Brownie.svg';

class Intro extends PureComponent {
  hot_keys = { // eslint-disable-line
    space: {
      priority: 1,
      handler: () => {
        const { history } = this.props;
        if (history) {
          history.push('/topic');
        }
      },
    },
  }

  render() {
    return (
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
          <Link className="app-link" to="/topic" href="/topic">Press Spacebar to Start :p</Link>
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
  }
}

Intro.propTypes = {
  history: PropTypes.object.isRequired,
};

export default hotkeys(Intro);
