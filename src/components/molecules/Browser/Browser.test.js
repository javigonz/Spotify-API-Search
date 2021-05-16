import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Browser from "./Browser";

Enzyme.configure({ adapter: new Adapter() });

describe("Browser Component", () => {
  let component;
  let mockProps;
  const mockCallBack = jest.fn();
  const dataMock = {
    next:
      "https://api.spotify.com/v1/search?query=metallica&type=album&offset=20&limit=20",
    total: 250,
    items: [
      {
        type: "album",
        name: "Metallica",
        total_tracks: 12,
        images: [],
        uri: "spotify:album:2Kh43m04B1UkVcpcRa1Zug",
      },
      {
        type: "album",
        name: "Garage inc.",
        total_tracks: 27,
        images: [],
        uri: "spotify:album:8998df89sf98s",
      },
    ],
  };

  const getRequiredProps = () => ({
    data: dataMock,
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<Browser {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN have items SHOULD render browseitem and pagination", () => {
      renderComponent();
      const browserItem = component.find("BrowserItem");
      const pagination = component.find("Button");

      expect(browserItem).toHaveLength(2);
      expect(pagination).toHaveLength(1);
    });

    it("WHEN have not next SHOULD not render pagination", () => {
      renderComponent({ data: { ...dataMock, next: undefined } });
      const browserItem = component.find("BrowserItem");
      const pagination = component.find("Button");

      expect(browserItem).toHaveLength(2);
      expect(pagination).toHaveLength(0);
    });

    it("WHEN not pass data prop SHOULD not render pagination and items", () => {
      renderComponent({ data: undefined });
      const browserItem = component.find("BrowserItem");
      const pagination = component.find("Button");

      expect(browserItem).toHaveLength(0);
      expect(pagination).toHaveLength(0);
    });
  });
});
