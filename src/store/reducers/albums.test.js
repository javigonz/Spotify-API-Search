import { REDUX_SET_ALBUMS, REDUX_ADD_ALBUMS } from "../../constants/constants";
import albumsReducer from "./albums";

describe("Reducer Albums", () => {
  it("should return the initial state", () => {
    expect(albumsReducer(undefined, {})).toEqual({});
  });

  it("should handle REDUX_SET_ALBUMS", () => {
    expect(
      albumsReducer(
        {},
        {
          type: REDUX_SET_ALBUMS,
          albums: {
            items: ["album1"],
            next: "next album2",
          },
        }
      )
    ).toEqual({ items: ["album1"], next: "next album2" });
  });

  it("should handle REDUX_ADD_ALBUMS", () => {
    expect(
      albumsReducer(
        {
          items: ["album1"],
          next: "next album2",
        },
        {
          type: REDUX_ADD_ALBUMS,
          albums: {
            items: ["album2", "album3"],
            next: "next album4",
          },
        }
      )
    ).toEqual({ items: ["album1", "album2", "album3"], next: "next album4" });
  });
});
