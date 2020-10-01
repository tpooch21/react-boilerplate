import produce from 'immer';

const initialState = {
  currentString: '',
  loading: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const inputReducer = (state = initialState, action) => {
  produce(state, draft => {
    switch (action.type) {
      case 'ENTER_STRING':
        draft.currentString = action.currentString;
        break;
    }
  });
};

export default inputReducer;
