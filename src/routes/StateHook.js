import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import State from '../components/hooks/State';
import FooterNavBar from '../components/FooterNavBar';

const hook = `// State Hook
import React, { useState } from 'react';

const Hook = () => {
  const [count, setCount] = useState(0); // 0 is default value
  return (
    <div className="card">
      <h1>State Hook</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
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
  render() {
    const { count } = this.state;
    return (
      <div className="card">
        <h1>Normal Class</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}
`;

const StateHook = () => {
  const [selected, setSelected] = useState(null);
  return (
    <div className="app-content">
      <div className="page">
        <div className="title topic">State Hook</div>
        <div className="row">
          <State.Hook onPress={() => setSelected(hook)} />
          <State.NormalClass onPress={() => setSelected(normal)} />
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
      <FooterNavBar prev="/why" next="/effect" />
    </div>
  );
};

export default StateHook;
