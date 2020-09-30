import produce from 'immer';

import { LOAD_STRINGS } from './constants';

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
    }
  });

export default homePageReducer;
