import {
  REDUX_SET_ARTISTS,
  REDUX_ADD_ARTISTS,
} from "../../constants/constants";
import artistsReducer from "./artists";

describe("Reducer Artists", () => {
  it("should return the initial state", () => {
    expect(artistsReducer(undefined, {})).toEqual({});
  });

  it("should handle REDUX_SET_ARTISTS", () => {
    expect(
      artistsReducer(
        {},
        {
          type: REDUX_SET_ARTISTS,
          artists: {
            items: ["artist1"],
            next: "next artist2",
          },
        }
      )
    ).toEqual({ items: ["artist1"], next: "next artist2" });
  });

  it("should handle REDUX_ADD_ARTISTS", () => {
    expect(
      artistsReducer(
        {
          items: ["artist1"],
          next: "next artist2",
        },
        {
          type: REDUX_ADD_ARTISTS,
          artists: {
            items: ["artist2", "artist3"],
            next: "next artist4",
          },
        }
      )
    ).toEqual({
      items: ["artist1", "artist2", "artist3"],
      next: "next artist4",
    });
  });
});
