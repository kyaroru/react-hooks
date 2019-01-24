import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Intro from './routes/Intro';
import Topic from './routes/Topic';
import What from './routes/What';
import Why from './routes/Why';
import StateHook from './routes/StateHook';
import EffectHook from './routes/EffectHook';
import EffectHookWithCleanUp from './routes/EffectHookWithCleanup';
import Additional from './routes/Additional';
import Rules from './routes/Rules';
import BYOH from './routes/BYOH';
import Links from './routes/Links';

const App = () => (
  <Router>
    <div className="app">
      <Route path="/" exact component={Intro} />
      <Route path="/topic" component={Topic} />
      <Route path="/what" component={What} />
      <Route path="/why" component={Why} />
      <Route path="/state" component={StateHook} />
      <Route path="/effect" component={EffectHook} />
      <Route path="/effect-cleanup" component={EffectHookWithCleanUp} />
      <Route path="/additional" component={Additional} />
      <Route path="/rules" component={Rules} />
      <Route path="/byoh" component={BYOH} />
      <Route path="/links" component={Links} />
    </div>
  </Router>
);

export default App;
