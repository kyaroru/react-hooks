import React from 'react';
import { Link } from 'react-router-dom';
import FooterNavBar from '../components/FooterNavBar';

const Additional = () => (
  <div className="app-content">
    <div className="page">
      <div className="topic">Additional Hooks</div>
      <div className="paragraph">
        <p>useReducer()</p>
        <p>useCallback()</p>
        <p>useMemo()</p>
        <p>useRef()</p>
        <p>useImperativeHandle()</p>
        <p>useLayoutEffect()</p>
        <p>useDebugValue()</p>
      </div>
    </div>
    <div className="back-button">
      <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
    </div>
    <FooterNavBar prev="/effect" next="/rules" />
  </div>
);

export default Additional;

