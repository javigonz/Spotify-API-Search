import {
  readableDuration,
  isEmpty,
  isEmptyResult,
  setSessionExpired,
} from "./helpers";

describe("Helpers", () => {
  it("WHEN call readableDuration SHOULD return time in a properly format", () => {
    const result = readableDuration(500045);

    expect(result).toEqual("08:20");
  });

  it("WHEN call readableDuration with delimitator SHOULD return time in a properly format", () => {
    const result = readableDuration(500045, "-");

    expect(result).toEqual("08-20");
  });

  it("WHEN call isEmpty with empty object SHOULD return true", () => {
    const result = isEmpty({});

    expect(result).toEqual(true);
  });

  it("WHEN call isEmpty with not empty object SHOULD return false", () => {
    const result = isEmpty({ foo: "bar" });

    expect(result).toEqual(false);
  });

  it("WHEN call isEmptyResult with empty object SHOULD return true", () => {
    const result = isEmptyResult({ albums: {}, artists: {}, tracks: {} });

    expect(result).toEqual(true);
  });

  it("WHEN call isEmptyResult with not empty object SHOULD return false", () => {
    const result = isEmptyResult({
      albums: { foo: "bar" },
      artists: {},
      tracks: {},
    });

    expect(result).toEqual(false);
  });

  it("WHEN call setSessionExpired SHOULD return undefined", () => {
    const result = setSessionExpired(["foo"]);

    expect(result).toEqual(undefined);
  });
});
