import React from 'react';

import InputWrapper from '../../components/Wrapper/index';
import { Form } from './Form';
import { Input } from './Input';

const UserInputPage = () => (
  <InputWrapper>
    <h2>Input a word or phrase to add to the grid!</h2>
    <Form>
      <Input />
    </Form>
  </InputWrapper>
);

export default UserInputPage;
