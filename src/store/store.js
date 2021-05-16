/* istanbul ignore file */
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import albumsReducer from "./reducers/albums";
import artistsReducer from "./reducers/artists";
import tracksReducer from "./reducers/tracks";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    albums: albumsReducer,
    artists: artistsReducer,
    tracks: tracksReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
