import produce from 'immer';

import { LOAD_STRINGS, LOAD_STRINGS_SUCCESS } from './constants';

export const initialState = {
  strings: [],
  loading: false,
  error: false,
};

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
    }
  });

export default homePageReducer;
