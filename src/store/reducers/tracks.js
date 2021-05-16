import { REDUX_SET_TRACKS, REDUX_ADD_TRACKS } from "../../constants/constants";

const tracksReducer = (state = {}, action) => {
  const { tracks } = action;
  switch (action.type) {
    case REDUX_SET_TRACKS:
      return tracks;
    case REDUX_ADD_TRACKS:
      return {
        ...state,
        next: tracks.next,
        items: [...state.items, ...tracks.items],
      };
    default:
      return state;
  }
};

export default tracksReducer;
