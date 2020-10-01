/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import UserInputPage from 'containers/UserInputPage/index';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Toolbar from '../../components/Navigation/Toolbar/index';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Toolbar />
      <main style={{ marginTop: '60px' }}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/input" component={UserInputPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
      <GlobalStyle />
    </div>
  );
}
