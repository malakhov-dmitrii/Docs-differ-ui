import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import {
  POSTER_MAKE_REQUEST_BEGIN,
  POSTER_MAKE_REQUEST_SUCCESS,
  POSTER_MAKE_REQUEST_FAILURE,
  POSTER_MAKE_REQUEST_DISMISS_ERROR,
} from '../../../../src/features/poster/redux/constants';

import {
  makeRequest,
  dismissMakeRequestError,
  reducer,
} from '../../../../src/features/poster/redux/makeRequest';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('poster/redux/makeRequest', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when makeRequest succeeds', () => {
    const store = mockStore({});

    return store.dispatch(makeRequest())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', POSTER_MAKE_REQUEST_BEGIN);
        expect(actions[1]).toHaveProperty('type', POSTER_MAKE_REQUEST_SUCCESS);
      });
  });

  it('dispatches failure action when makeRequest fails', () => {
    const store = mockStore({});

    return store.dispatch(makeRequest({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).toHaveProperty('type', POSTER_MAKE_REQUEST_BEGIN);
        expect(actions[1]).toHaveProperty('type', POSTER_MAKE_REQUEST_FAILURE);
        expect(actions[1]).toHaveProperty('data.error', expect.anything());
      });
  });

  it('returns correct action by dismissMakeRequestError', () => {
    const expectedAction = {
      type: POSTER_MAKE_REQUEST_DISMISS_ERROR,
    };
    expect(dismissMakeRequestError()).toEqual(expectedAction);
  });

  it('handles action type POSTER_MAKE_REQUEST_BEGIN correctly', () => {
    const prevState = { makeRequestPending: false };
    const state = reducer(
      prevState,
      { type: POSTER_MAKE_REQUEST_BEGIN }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.makeRequestPending).toBe(true);
  });

  it('handles action type POSTER_MAKE_REQUEST_SUCCESS correctly', () => {
    const prevState = { makeRequestPending: true };
    const state = reducer(
      prevState,
      { type: POSTER_MAKE_REQUEST_SUCCESS, data: {} }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.makeRequestPending).toBe(false);
  });

  it('handles action type POSTER_MAKE_REQUEST_FAILURE correctly', () => {
    const prevState = { makeRequestPending: true };
    const state = reducer(
      prevState,
      { type: POSTER_MAKE_REQUEST_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.makeRequestPending).toBe(false);
    expect(state.makeRequestError).toEqual(expect.anything());
  });

  it('handles action type POSTER_MAKE_REQUEST_DISMISS_ERROR correctly', () => {
    const prevState = { makeRequestError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: POSTER_MAKE_REQUEST_DISMISS_ERROR }
    );
    expect(state).not.toBe(prevState); // should be immutable
    expect(state.makeRequestError).toBe(null);
  });
});

