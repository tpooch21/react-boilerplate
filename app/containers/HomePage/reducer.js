import produce from 'immer';

import {
  LOAD_STRINGS,
  LOAD_STRINGS_SUCCESS,
  LOAD_STRINGS_ERROR,
} from './constants';

export const initialState = {
  strings: [],
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOAD_STRINGS:
        draft.loading = true;
        draft.error = false;
        break;
      case LOAD_STRINGS_SUCCESS:
        draft.loading = false;
        draft.error = false;
        draft.strings = action.strings;
        break;
      case LOAD_STRINGS_ERROR:
        draft.loading = false;
        draft.error = true;
        break;
    }
  });

export default homePageReducer;
