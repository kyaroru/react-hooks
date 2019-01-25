import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { hotkeys } from 'react-keyboard-shortcuts';
import FooterNavBar from '../components/FooterNavBar';
import brownie from '../images/Brownie.svg';

class End extends PureComponent {
  hot_keys = { // eslint-disable-line
    space: {
      priority: 1,
      handler: () => {
        const { history } = this.props;
        if (history) {
          history.replace('/');
        }
      },
    },
  }

  render() {
    const { history } = this.props;
    return (
      <div className="app-content">
        <div className="page">
          <div className="main-title">
            Thank for your time!
          </div>
          <img alt="brownie" className="app-logo" src={brownie} />
          <br />
          <div className="title-small">
            Please come again :p
          </div>
          <Link className="app-link" to="/" href="/">Press Spacebar to Back to Home :p</Link>
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

export default hotkeys(End);
