import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import FooterNavBar from '../components/FooterNavBar';
import CustomHook from '../components/hooks/Custom';

const hook = `// Custom-made hook :p
import React, { useEffect, useState } from 'react';

const useWindowWidth = () => { // must start with useXXXX
  const [width, setWidth] = useState(window.innerWidth);
  // Similar to componentDidMount() and componentDidUpdate()
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    // listen to window resize
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });
  return width;
};

const CustomHook = () => {
  const width = useWindowWidth();
  return (
    <div className="card">
      <h1>Custom Hook</h1>
      <p>
        Current Window Width:
        {' '}
        {width}
      </p>
    </div>
  );
};`;

const BYOH = () => (
  <div className="app-content">
    <div className="page">
      <div className="title topic">Build your own Hooks</div>
      <div className="row">
        <CustomHook />
      </div>
      <div className="card highlight">
        <Highlight language="javascript">
          {hook}
        </Highlight>
      </div>
    </div>
    <div className="back-button">
      <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
    </div>
    <FooterNavBar prev="/rules" next="/links" />
  </div>
);

export default BYOH;
