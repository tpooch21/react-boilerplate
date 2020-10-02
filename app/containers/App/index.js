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
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Toolbar from '../../components/Navigation/Toolbar/index';

import GlobalStyle from '../../global-styles';
import ErrorMessage from '../../components/ErrorMessage/index';
import { makeHomeSelectError } from '../HomePage/selectors';
import { makeInputSelectError } from '../UserInputPage/selectors';

const App = props => (
  <div>
    <Toolbar />
    <ErrorMessage show={props.loadError || props.submitError} />
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

App.propTypes = {
  loadError: PropTypes.bool,
  submitError: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  loadError: makeHomeSelectError(),
  submitError: makeInputSelectError(),
});

export default connect(mapStateToProps)(App);
