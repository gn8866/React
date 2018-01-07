import React, { Component } from 'react';
import {
  Route,
  Link,
} from 'react-router-dom';

import PageA from './PageA';
import PageB from './PageB';

export default function App({ children }) {
  return (
      <div>
        <Link to='/PageA'>PageA</Link>
        <br />
        <Link to='/PageB'>PageB</Link>

        <hr />

        <Route path='/PageA' component={PageA} />
        <Route path='/PageB' component={PageB} />
      </div>
  );
};

