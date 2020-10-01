/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import reducer from './reducer';
import * as actions from './actions';
import messages from './messages';
import saga from './saga';
import HomeWrapper from '../../components/Wrapper/index';

import StringDisplay from '../../components/StringDisplay/index';

const HomePage = props => {
  useEffect(() => {
    props.loadStrings();
  }, []);

  return (
    <HomeWrapper>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <StringDisplay strings={props.strings} loading={props.loading} />
    </HomeWrapper>
  );
};

const mapStateToProps = state => ({
  strings: state.homepage.strings,
  loading: state.homepage.loading,
  error: state.homepage.error,
});

const mapDispatchToProps = dispatch => ({
  loadStrings: () => dispatch(actions.loadStrings()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'homepage', reducer });

const withSaga = injectSaga({ key: 'homepage', saga });

HomePage.propTypes = {
  loadStrings: PropTypes.func,
  strings: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(HomePage);
