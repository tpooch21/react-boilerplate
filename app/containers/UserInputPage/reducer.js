import produce from 'immer';

import {
  ENTER_STRING,
  SUBMIT_STRING,
  SUBMIT_STRING_SUCCESS,
  SUBMIT_STRING_ERROR,
} from './constants';

export const initialState = {
  currentString: '',
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const inputReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ENTER_STRING:
        draft.currentString = action.currentString;
        break;
      case SUBMIT_STRING:
        draft.loading = true;
        draft.error = false;
        break;
      case SUBMIT_STRING_SUCCESS:
        draft.loading = false;
        draft.error = false;
        break;
      case SUBMIT_STRING_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
    }
  });

export default inputReducer;
