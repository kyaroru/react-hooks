import React from 'react';
import { Link } from 'react-router-dom';
import Effect from '../components/hooks/Effect';
import FooterNavBar from '../components/FooterNavBar';

const EffectHook = () => (
  <div className="app-content">
    <div className="page">
      <div className="title topic">Effect Hook</div>
      <div className="row">
        <Effect.Hook />
        <Effect.NormalClass />
      </div>
      <div className="row">
        <Effect.HookWithCleanUp />
        <Effect.NormalClassWithCleanUp />
      </div>
    </div>
    <div className="back-button">
      <Link className="app-link" to="/topic" href="/topic">⬅ Back to Topic</Link>
    </div>
    <FooterNavBar prev="/state" next="/additional" />
  </div>
);

export default EffectHook;
