import {
  REDUX_SET_ARTISTS,
  REDUX_ADD_ARTISTS,
} from "../../constants/constants";

const artistsReducer = (state = {}, action) => {
  const { artists } = action;
  switch (action.type) {
    case REDUX_SET_ARTISTS:
      return artists;
    case REDUX_ADD_ARTISTS:
      return {
        ...state,
        next: artists.next,
        items: [...state.items, ...artists.items],
      };
    default:
      return state;
  }
};

export default artistsReducer;
