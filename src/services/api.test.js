import { getParamValues, get, post } from "./api";
import axios from "axios";

jest.mock("axios", () => {
  return {
    get: () => {
      return Promise.resolve({ data: "all data here" });
    },
    post: () => {
      return Promise.resolve({ data: "post data here" });
    },
  };
});

describe("Api", () => {
  it("WHEN call getParamValues SHOULD return params in a properly format", () => {
    const url = "#access_token=BQDg-u&token_type=Bearer&expires_in=3600";
    const result = getParamValues(url);

    expect(result).toEqual({
      access_token: "BQDg-u",
      expires_in: "3600",
      token_type: "Bearer",
    });
  });

  it("WHEN call get SHOULD return data", async () => {
    const url = "newurl";
    const params = "newparams";

    const result = await get(url, params);
    expect(result).toEqual("all data here");
  });

  it("WHEN call post SHOULD return post data", async () => {
    const url = "newurl";
    const params = "newparams";

    const result = await post(url, params);
    expect(result).toEqual("post data here");
  });
});
