import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import Effect from '../components/hooks/Effect';
import FooterNavBar from '../components/FooterNavBar';

const hook = `// Effect Hook
import React, { useEffect } from 'react';

const Hook = () => {
  const [count, setCount] = useState(0); // 0 is default value

  // Similar to componentDidMount() and componentDidUpdate()
  useEffect(() => {
    // Update the document title using the browser API
    document.title = 'You clicked ' + count + ' times (Hook)';
  });

  return (
    <div className="card">
      <h1>Effect Hook</h1>
      <p>You clicked {count} times</p>
      <div onClick={() => setCount(count + 1)}>
        Click me
      </div>
    </div>
  );
};
`;

const normal = `// Normal Class
import React, { Component } from 'react';

class NormalClass extends Component {
  state = {
    count: 0,
  }
  componentDidMount() {
    const { count } = this.state;
    document.title = 'You clicked ' + count + ' times (Normal Class)';
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = 'You clicked ' + count + ' times (Normal Class)';
  }
  render() {
    const { count } = this.state;
    return (
      <div className="card">
        <h1>Normal Class</h1>
        <p>You clicked {count} times</p>
        <div onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </div>
      </div>
    );
  }
}`;

const EffectHook = () => {
  const [selected, setSelected] = useState(hook);
  return (
    <div className="app-content">
      <div className="page">
        <div className="title topic">Effect Hook</div>
        <div className="row">
          <Effect.Hook onPress={() => setSelected(hook)} />
          <Effect.NormalClass onPress={() => setSelected(normal)} />
        </div>
        <div className="card highlight">
          <Highlight language="javascript">
            {selected}
          </Highlight>
        </div>
      </div>
      <div className="back-button">
        <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
      </div>
      <FooterNavBar prev="/state" next="/effect-cleanup" />
    </div>
  );
};

export default EffectHook;
