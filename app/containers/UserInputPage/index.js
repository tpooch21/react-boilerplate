import React from 'react';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import InputWrapper from '../../components/Wrapper/index';
import { Form } from './Form';
import { Input } from './Input';
import { Submit } from './Submit';
import reducer from './reducer';
import saga from './saga';
import * as actions from './actions';

const UserInputPage = props => (
  <InputWrapper>
    <h2>Input a word or phrase to add to the grid!</h2>
    <Form onSubmit={props.handleSubmit}>
      <Input
        placeholder="Enter word or phrase here"
        value={props.inputVal}
        onChange={props.changeInput}
      />
      <Submit type="submit" value="Submit" />
    </Form>
  </InputWrapper>
);

UserInputPage.propTypes = {
  inputVal: PropTypes.string,
  changeInput: PropTypes.func,
  handleSubmit: PropTypes.func,
};

const mapStateToProps = state => ({
  inputVal: state.userinput.currentString,
});

const mapDispatchToProps = dispatch => ({
  changeInput: evt => dispatch(actions.enterString(evt.target.value)),
  handleSubmit: evt => {
    if (evt !== undefined && evt.preventDefault) evt.preventDefault();
    dispatch(actions.submitString());
  },
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'userinput', reducer });

const withSaga = injectSaga({ key: 'userinput', saga });

export default compose(
  withSaga,
  withReducer,
  withConnect,
)(UserInputPage);
