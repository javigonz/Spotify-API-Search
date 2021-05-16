import { REDUX_SET_TRACKS, REDUX_ADD_TRACKS } from "../../constants/constants";
import tracksReducer from "./tracks";

describe("Reducer Tracks", () => {
  it("should return the initial state", () => {
    expect(tracksReducer(undefined, {})).toEqual({});
  });

  it("should handle REDUX_SET_TRACKS", () => {
    expect(
      tracksReducer(
        {},
        {
          type: REDUX_SET_TRACKS,
          tracks: {
            items: ["track1"],
            next: "next track2",
          },
        }
      )
    ).toEqual({ items: ["track1"], next: "next track2" });
  });

  it("should handle REDUX_ADD_TRACKS", () => {
    expect(
      tracksReducer(
        {
          items: ["track1"],
          next: "next track2",
        },
        {
          type: REDUX_ADD_TRACKS,
          tracks: {
            items: ["track2", "track3"],
            next: "next track4",
          },
        }
      )
    ).toEqual({
      items: ["track1", "track2", "track3"],
      next: "next track4",
    });
  });
});
