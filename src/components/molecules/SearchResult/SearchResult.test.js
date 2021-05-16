import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import SearchResult from "./SearchResult";

Enzyme.configure({ adapter: new Adapter() });

describe("SearchResult Component", () => {
  let component;
  let mockProps;

  const isValidSessionMock = jest.fn();
  isValidSessionMock.mockReturnValue(true);
  const getRequiredProps = () => ({
    result: {
      albums: { items: ["foo"] },
      artists: { items: ["bar"] },
      tracks: { items: ["zee"] },
    },
    isValidSession: isValidSessionMock,
    paginationNext: jest.fn(),
    setCategory: jest.fn(),
    selectedCategory: "album",
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<SearchResult {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN is valid session SHOULD render categories and browser components", () => {
      renderComponent();
      const categories = component.find("Categories");
      const browser = component.find("Browser");

      expect(categories).toHaveLength(1);
      expect(browser).toHaveLength(1);
    });

    it("WHEN is invalid session SHOULD redirect", () => {
      const newgetRequiredProps = {
        isValidSession: jest.fn(),
      };
      renderComponent(newgetRequiredProps);
      const redirect = component.find("Redirect");

      expect(redirect).toHaveLength(1);
    });
  });
});
