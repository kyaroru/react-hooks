import React, { Component, useState, useEffect } from 'react';

class NormalClass extends Component { // eslint-disable-line
  state = {
    count: 0,
  }
  componentDidMount() {
    const { count } = this.state;
    document.title = `You clicked ${count} times (Normal Class)`;
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `You clicked ${count} times (Normal Class)`;
  }
  render() {
    const { count } = this.state;
    return (
      <div className="card">
        <h1>Normal Class</h1>
        <p>You clicked {count} times</p>
        <div role="button" className="app-button" onClick={() => this.setState({ count: count + 1 })}>
          Click me
        </div>
      </div>
    );
  }
}

const Hook = () => {
  const [count, setCount] = useState(0); // 0 is default value

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times (Hook)`;
  });

  return (
    <div className="card">
      <h1>Effect Hook</h1>
      <p>You clicked {count} times</p>
      <div role="button" className="app-button" onClick={() => setCount(count + 1)}>
        Click me
      </div>
    </div>
  );
};

// =============================================== //

class NormalClassWithCleanUp extends Component { // eslint-disable-line
  state = {
    width: window.innerWidth,
  }
  componentDidMount() {
    window.addEventListener('resize', this.handleWindowResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
  handleWindowResize = (event) => {
    this.setState({ width: event.currentTarget.innerWidth });
  };
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
}

const HookWithCleanUp = () => {
  const [width, setWidth] = useState(window.innerWidth);
  // Similar to componentDidMount and componentDidUpdate:
  const handleWindowResize = (event) => {
    setWidth(event.currentTarget.innerWidth);
  };
  useEffect(() => {
    // listen to window resize
    window.addEventListener('resize', handleWindowResize);
    return () => {
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
};

export default {
  Hook, HookWithCleanUp, NormalClass, NormalClassWithCleanUp,
};
