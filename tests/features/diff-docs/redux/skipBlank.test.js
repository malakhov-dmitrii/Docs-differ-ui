import {
  DIFF_DOCS_SKIP_BLANK,
} from '../../../../src/features/diff-docs/redux/constants';

import {
  skipBlank,
  reducer,
} from '../../../../src/features/diff-docs/redux/skipBlank';

describe('diff-docs/redux/skipBlank', () => {
  it('returns correct action by skipBlank', () => {
    expect(skipBlank()).toHaveProperty('type', DIFF_DOCS_SKIP_BLANK);
  });

  it('handles action type DIFF_DOCS_SKIP_BLANK correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: DIFF_DOCS_SKIP_BLANK }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});
