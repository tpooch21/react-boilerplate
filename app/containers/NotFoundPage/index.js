/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import NotFoundWrapper from '../../components/Wrapper/index';

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <h2>
        <FormattedMessage {...messages.header} />
      </h2>
    </NotFoundWrapper>
  );
}
