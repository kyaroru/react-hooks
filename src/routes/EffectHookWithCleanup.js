import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import Effect from '../components/hooks/Effect';
import FooterNavBar from '../components/FooterNavBar';

const hook = `// Effect Hook
import React, { useEffect } from 'react';

const HookWithCleanUp = () => {
  const [width, setWidth] = useState(window.innerWidth);

  // Similar to componentDidMount() and componentDidUpdate()
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    // listen to window resize
    window.addEventListener('resize', handleWindowResize);
    return () => { // Similar to componentWillUnmount()
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <div className="card">
      <h1>Effect Hook</h1>
      <h3>(With Clean Up)</h3>
      <p>Current Window Width: {width}</p>
    </div>
  );
};`;

const normal = `// Normal Class
import React, { Component } from 'react';

class NormalClassWithCleanUp extends Component {
  state = {
    width: window.innerWidth,
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
  handleWindowResize = () => this.setState({ width: window.innerWidth });

  render() {
    const { width } = this.state;
    return (
      <div className="card">
        <h1>Normal Class</h1>
        <h3>(With Clean Up)</h3>
        <p>Current Window Width: {width}</p>
      </div>
    );
  }
}`;

const EffectHookWithCleanUp = ({ history }) => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="app-content">
      <div className="page">
        <div className="title topic">Effect Hook With Clean Up</div>
        <div className="row">
          <Effect.HookWithCleanUp onPress={() => setSelected(hook)} />
          <Effect.NormalClassWithCleanUp onPress={() => setSelected(normal)} />
        </div>
        {selected && (
          <div className="card highlight">
            <Highlight language="javascript">
              {selected}
            </Highlight>
          </div>
        )}
      </div>
      <div className="back-button">
        <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
      </div>
      <FooterNavBar prev="/effect" next="/additional" history={history} />
    </div>
  );
};

EffectHookWithCleanUp.propTypes = {
  history: PropTypes.object.isRequired,
};

export default EffectHookWithCleanUp;
