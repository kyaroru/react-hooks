import React, { Component, useState } from 'react';

class NormalClass extends Component { // eslint-disable-line
  state = {
    count: 0,
  }

  render() {
    const { count } = this.state;
    const { onPress } = this.props; // eslint-disable-line
    return (
      <div className="card" onClick={onPress}>
        <h1>Normal Class</h1>
        <p>
          You clicked
          {' '}
          {count}
          {' '}
          times
        </p>
        <div role="button" className="app-button" onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </div>
      </div>
    );
  }
}

// =============================================== //

const Hook = ({ onPress }) => { // eslint-disable-line
  const [count, setCount] = useState(0); // 0 is default value
  return (
    <div className="card" onClick={onPress}>
      <h1>State Hook</h1>
      <p>
        You clicked
        {' '}
        {count}
        {' '}
        times
      </p>
      <div role="button" className="app-button" onClick={() => setCount(count + 1)}>
        Click me
      </div>
    </div>
  );
};

export default { NormalClass, Hook };
