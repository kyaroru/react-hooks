import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { hotkeys } from 'react-keyboard-shortcuts';

class Topic extends PureComponent {
  hot_keys = { // eslint-disable-line
    backspace: {
      priority: 1,
      handler: () => {
        const { history } = this.props;
        if (history) {
          history.replace('/');
        }
      },
    },
    space: {
      priority: 1,
      handler: () => {
        const { history } = this.props;
        if (history) {
          history.push('/what');
        }
      },
    },
  }

  render() {
    return (
      <div className="app-content">
        <div className="page">
          <div className="title topic">Table of Content</div>
          <div className="topic-list">
            <Link className="app-link" to="/what" href="/what">What is Hooks?</Link>
            <Link className="app-link" to="/why" href="/why">Why Hooks?</Link>
            <Link className="app-link" to="/state" href="/state">State Hook</Link>
            <Link className="app-link" to="/effect" href="/effect">Effect Hook</Link>
            <Link className="app-link" to="/additional" href="/additional">Additional Hooks</Link>
            <Link className="app-link" to="/rules" href="/rules">Rules of Hook</Link>
            <Link className="app-link" to="/byoh" href="/rules">Build Your Own Hooks</Link>
            <Link className="app-link" to="/links" href="/links">Links for Reference</Link>
          </div>
        </div>
        <div className="back-button">
          <Link className="app-link" to="/" href="/">⬅ Back to Main</Link>
        </div>
      </div>
    );
  }
}

Topic.propTypes = {
  history: PropTypes.object,
};

Topic.defaultProps = {
  history: null,
};

export default hotkeys(Topic);
