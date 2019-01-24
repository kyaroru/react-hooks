import React, { useEffect, useState } from 'react';

const useWindowWidth = () => {
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
};

export default CustomHook;
