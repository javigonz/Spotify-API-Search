import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import BrowserItem from "./BrowserItem";

Enzyme.configure({ adapter: new Adapter() });

describe("BrowserItem Component", () => {
  let component;
  let mockProps;
  const mockCallBack = jest.fn();
  const dataAlbumMock = {
    type: "album",
    name: "Metallica",
    artists: [{ name: "Metallica" }],
    total_tracks: 12,
    images: [],
    uri: "spotify:album:2Kh43m04B1UkVcpcRa1Zug",
  };

  const getRequiredProps = () => ({
    item: dataAlbumMock,
    index: 1,
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<BrowserItem {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN type is album SHOULD render properly", () => {
      renderComponent();
      const header = component.find(".home__card--header");
      const artist = component.find(".home__card--strongDescription");
      const title = component.find(".home__card--title");

      expect(header).toHaveLength(1);
      expect(artist).toHaveLength(1);
      expect(artist.text()).toEqual("Metallica");
      expect(title).toHaveLength(1);
      expect(title.text()).toEqual("Metallica");
    });

    it("WHEN type is track SHOULD render properly", () => {
      const dataTrackMock = {
        type: "album",
        name: "Metallica",
        artists: [{ name: "Metallica" }],
        duration: 23456,
        images: [],
        uri: "spotify:album:2Kh43m04B1UkVcpcRa1Zug",
      };
      renderComponent({ data: dataTrackMock });
      const header = component.find(".home__card--header");
      const description = component.find(".home__card--description");
      const title = component.find(".home__card--title");

      expect(header).toHaveLength(1);
      expect(description).toHaveLength(2);
      expect(description.at(0).text()).toEqual("Artist:Metallica");
      expect(description.at(1).text()).toEqual("Number of tracks: 12");
      expect(title).toHaveLength(1);
      expect(title.text()).toEqual("Metallica");
    });

    it("WHEN type is artist SHOULD render properly", () => {
      const dataArtistMock = {
        type: "album",
        name: "Metallica",
        artists: [{ name: "Metallica" }],
        duration: 23456,
        images: [],
        uri: "spotify:album:2Kh43m04B1UkVcpcRa1Zug",
      };
      renderComponent({ data: dataArtistMock });
      const header = component.find(".home__card--header");
      const title = component.find(".home__card--title");

      expect(header).toHaveLength(1);
      expect(title).toHaveLength(1);
      expect(title.text()).toEqual("Metallica");
    });
  });
});
