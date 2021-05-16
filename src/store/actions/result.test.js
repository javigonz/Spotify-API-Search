import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "./result";
import {
  REDUX_SET_ALBUMS,
  REDUX_ADD_ALBUMS,
  REDUX_SET_ARTISTS,
  REDUX_ADD_ARTISTS,
  REDUX_SET_TRACKS,
  REDUX_ADD_TRACKS,
} from "../../constants/constants";
import fetchMock from "fetch-mock";
import { get } from "../../services/api";

jest.mock("../../services/api", () => {
  return {
    get: () => {
      return Promise.resolve({
        data: [],
      });
    },
  };
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  it("creates SET when fetching initGetResult", () => {
    const expectedActions = [
      { type: REDUX_SET_ALBUMS },
      { type: REDUX_SET_ARTISTS },
      { type: REDUX_SET_TRACKS },
    ];
    const store = mockStore({
      data: [],
    });

    return store.dispatch(actions.initGetResult("foo")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates REDUX_ADD_ALBUMS when fetching initViewMoreAlbums", () => {
    const expectedActions = [{ type: REDUX_ADD_ALBUMS }];
    const store = mockStore({
      data: [],
    });

    return store.dispatch(actions.initViewMoreAlbums("foo")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates REDUX_ADD_ARTISTS when fetching initViewMoreArtists", () => {
    const expectedActions = [{ type: REDUX_ADD_ARTISTS }];
    const store = mockStore({
      data: [],
    });

    return store.dispatch(actions.initViewMoreArtists("foo")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("creates REDUX_ADD_TRACKS when fetching initViewMoreTracks", () => {
    const expectedActions = [{ type: REDUX_ADD_TRACKS }];
    const store = mockStore({
      data: [],
    });

    return store.dispatch(actions.initViewMoreTracks("foo")).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
