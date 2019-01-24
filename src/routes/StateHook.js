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
  const [selected, setSelected] = useState('hook');
  return (
    <div className="app-content">
      <div className="page">
        <div className="row">
          <State.Hook onPress={() => setSelected('hook')} />
          <State.NormalClass onPress={() => setSelected('normal')} />
        </div>
        {selected === 'hook' &&
          <div className="card highlight">
            {/* <CodeMirror value={hook} options={options} /> */}
            <Highlight language="javascript">
              {hook}
            </Highlight>
          </div>
        }
        {selected === 'normal' &&
          <div className="card highlight">
            {/* <CodeMirror value={normal} options={options} /> */}
            <Highlight language="javascript">
              {normal}
            </Highlight>
          </div>
        }
      </div>

      <div className="back-button">
        <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
      </div>
      <FooterNavBar prev="/why" next="/effect" />
    </div>
  );
};

export default StateHook;
