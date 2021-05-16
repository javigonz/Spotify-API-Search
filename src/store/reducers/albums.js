import { REDUX_SET_ALBUMS, REDUX_ADD_ALBUMS } from "../../constants/constants";

const albumsReducer = (state = {}, action) => {
  const { albums } = action;
  switch (action.type) {
    case REDUX_SET_ALBUMS:
      return albums;
    case REDUX_ADD_ALBUMS:
      return {
        ...state,
        next: albums.next,
        items: [...state.items, ...albums.items],
      };
    default:
      return state;
  }
};

export default albumsReducer;
