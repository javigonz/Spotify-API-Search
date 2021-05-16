import {
  REDUX_SET_ALBUMS,
  REDUX_ADD_ALBUMS,
  REDUX_SET_ARTISTS,
  REDUX_ADD_ARTISTS,
  REDUX_SET_TRACKS,
  REDUX_ADD_TRACKS,
} from "../../constants/constants";
import { get } from "../../services/api";

export const setAlbums = (albums) => ({
  type: REDUX_SET_ALBUMS,
  albums,
});

export const addAlbums = (albums) => ({
  type: REDUX_ADD_ALBUMS,
  albums,
});

export const setArtists = (artists) => ({
  type: REDUX_SET_ARTISTS,
  artists,
});

export const addArtists = (artists) => ({
  type: REDUX_ADD_ARTISTS,
  artists,
});

export const setTracks = (tracks) => ({
  type: REDUX_SET_TRACKS,
  tracks,
});

export const addTracks = (tracks) => ({
  type: REDUX_ADD_TRACKS,
  tracks,
});

export const initGetResult = (searchTerm) => {
  return async (dispatch) => {
    try {
      const SPOTIFY_API_URL = `https://api.spotify.com/v1/search?query=${encodeURIComponent(
        searchTerm
      )}&type=album,track,artist`;
      const result = await get(SPOTIFY_API_URL);
      const { albums, artists, tracks } = result;
      dispatch(setAlbums(albums));
      dispatch(setArtists(artists));

      return dispatch(setTracks(tracks));
    } catch (error) {
      throw error;
    }
  };
};

export const initViewMoreAlbums = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addAlbums(result.albums));
    } catch (error) {
      throw error;
    }
  };
};

export const initViewMoreArtists = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addArtists(result.artists));
    } catch (error) {
      throw error;
    }
  };
};

export const initViewMoreTracks = (url) => {
  return async (dispatch) => {
    try {
      const result = await get(url);
      return dispatch(addTracks(result.tracks));
    } catch (error) {
      throw error;
    }
  };
};
