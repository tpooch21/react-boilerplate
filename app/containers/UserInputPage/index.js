import React from 'react';

import injectReducer from 'utils/injectReducer';
import { connect } from 'react-redux';
import InputWrapper from '../../components/Wrapper/index';
import { Form } from './Form';
import { Input } from './Input';
import { Submit } from './Submit';
import reducer from './reducer';

const UserInputPage = () => (
  <InputWrapper>
    <h2>Input a word or phrase to add to the grid!</h2>
    <Form>
      <Input placeholder="Enter word or phrase here" />
      <Submit type="submit" value="Submit" />
    </Form>
  </InputWrapper>
);

const withReducer = injectReducer({ key: 'userinput', reducer });

export default connect(withReducer)(UserInputPage);
