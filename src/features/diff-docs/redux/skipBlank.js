// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  DIFF_DOCS_SKIP_BLANK,
} from './constants';

export function skipBlank() {
  return {
    type: DIFF_DOCS_SKIP_BLANK,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case DIFF_DOCS_SKIP_BLANK:
      return {
        ...state,
        skipBlank: true
      };

    default:
      return state;
  }
}
