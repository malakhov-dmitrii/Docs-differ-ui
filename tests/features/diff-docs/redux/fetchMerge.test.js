import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  DIFF_DOCS_FETCH_MERGE_BEGIN,
  DIFF_DOCS_FETCH_MERGE_SUCCESS,
  DIFF_DOCS_FETCH_MERGE_FAILURE,
  DIFF_DOCS_FETCH_MERGE_DISMISS_ERROR,
} from '../../../../src/features/diff-docs/redux/constants';

import {
  fetchMerge,
  dismissFetchMergeError,
  reducer,
} from '../../../../src/features/diff-docs/redux/fetchMerge';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('diff-docs/redux/fetchMerge', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when fetchMerge succeeds', () => {
    const store = mockStore({});

    return store.dispatch(fetchMerge())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', DIFF_DOCS_FETCH_MERGE_BEGIN);
        expect(actions[1]).toHaveProperty('type', DIFF_DOCS_FETCH_MERGE_SUCCESS);
      });
  });

  it('dispatches failure action when fetchMerge fails', () => {
    const store = mockStore({});

    return store.dispatch(fetchMerge({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', DIFF_DOCS_FETCH_MERGE_BEGIN);
        expect(actions[1]).toHaveProperty('type', DIFF_DOCS_FETCH_MERGE_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissFetchMergeError', () => {
    const expectedAction = {
      type: DIFF_DOCS_FETCH_MERGE_DISMISS_ERROR,
    };
    expect(dismissFetchMergeError()).toEqual(expectedAction);
  });

  it('handles action type DIFF_DOCS_FETCH_MERGE_BEGIN correctly', () => {
    const prevState = { fetchMergePending: false };
    const state = reducer(
      prevState,
      { type: DIFF_DOCS_FETCH_MERGE_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchMergePending).toBe(true);
  });

  it('handles action type DIFF_DOCS_FETCH_MERGE_SUCCESS correctly', () => {
    const prevState = { fetchMergePending: true };
    const state = reducer(
      prevState,
      { type: DIFF_DOCS_FETCH_MERGE_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchMergePending).toBe(false);
  });

  it('handles action type DIFF_DOCS_FETCH_MERGE_FAILURE correctly', () => {
    const prevState = { fetchMergePending: true };
    const state = reducer(
      prevState,
      { type: DIFF_DOCS_FETCH_MERGE_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchMergePending).toBe(false);
    expect(state.fetchMergeError).toEqual(expect.anything());
  });

  it('handles action type DIFF_DOCS_FETCH_MERGE_DISMISS_ERROR correctly', () => {
    const prevState = { fetchMergeError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: DIFF_DOCS_FETCH_MERGE_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.fetchMergeError).toBe(null);
  });
});

