/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import messages from './messages';

import StringDisplay from '../../components/StringDisplay/StringDisplay';

export default function HomePage() {
  return (
    <HomeWrapper>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <StringDisplay />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid red;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
