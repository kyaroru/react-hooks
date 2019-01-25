import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FooterNavBar from '../components/FooterNavBar';

const Additional = ({ history }) => (
  <div className="app-content">
    <div className="page">
      <div className="title"><a className="topic" href="https://reactjs.org/docs/hooks-reference.html#additional-hooks">Additional Hooks</a></div>
      <div className="paragraph">
        <p>
          useContext() -
          {' '}
          <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-reference.html#usecontext">https://reactjs.org/docs/hooks-reference.html#usecontext</a>
        </p>
        <p>
          useReducer() -
          {' '}
          <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-reference.html#usereducer">https://reactjs.org/docs/hooks-reference.html#usereducer</a>
        </p>
        <p>
          useCallback() -
          {' '}
          <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-reference.html#usecallback">https://reactjs.org/docs/hooks-reference.html#usecallback</a>
        </p>
        <p>
          useMemo() -
          {' '}
          <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-reference.html#usememo">https://reactjs.org/docs/hooks-reference.html#usememo</a>
        </p>
        <p>
          useRef() -
          {' '}
          <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-reference.html#useref">https://reactjs.org/docs/hooks-reference.html#useref</a>
        </p>
        <p>
          useImperativeHandle() -
          {' '}
          <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-reference.html#useimperativehandle">https://reactjs.org/docs/hooks-reference.html#useimperativehandle</a>
        </p>
        <p>
          useLayoutEffect() -
          {' '}
          <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-reference.html#uselayouteffect">https://reactjs.org/docs/hooks-reference.html#uselayouteffect</a>
        </p>
        <p>
          useDebugValue() -
          {' '}
          <a className="highlight" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/docs/hooks-reference.html#usedebugvalue">https://reactjs.org/docs/hooks-reference.html#usedebugvalue</a>
        </p>
      </div>
    </div>
    <div className="back-button">
      <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
    </div>
    <FooterNavBar prev="/effect" next="/rules" history={history} />
  </div>
);

Additional.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Additional;
