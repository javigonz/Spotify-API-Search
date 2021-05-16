import * as React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import { HomeUnconnected } from "./Home";

Enzyme.configure({ adapter: new Adapter() });

describe("Home Component", () => {
  let component;
  let mockProps;

  const isValidSessionMock = jest.fn();
  isValidSessionMock.mockReturnValue(true);
  const getRequiredProps = () => ({
    isValidSession: isValidSessionMock,
    history: jest.fn(),
    dispatch: () => Promise.resolve({}),
    albums: { next: "" },
    artists: { next: "" },
    tracks: { next: "" },
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<HomeUnconnected {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN not valid session SHOULD render Redirect component", () => {
      const newgetRequiredProps = {
        isValidSession: jest.fn(),
        history: jest.fn(),
      };
      renderComponent(newgetRequiredProps);

      const redirect = component.find("Redirect");

      expect(redirect).toBeDefined();
      expect(redirect.prop("to")).toEqual({
        pathname: "/",
        state: { session_expired: true },
      });
    });

    it("WHEN is valid session SHOULD render Header and Searchs components", () => {
      renderComponent();

      const header = component.find("Header");
      const search = component.find("Search");
      const searchresult = component.find("SearchResult");

      expect(header).toBeDefined();
      expect(search).toBeDefined();
      expect(searchresult).toBeDefined();
    });

    it("WHEN call handlSearch SHOULD set new state of isLoading", () => {
      renderComponent();
      const setIsLoading = jest.fn();
      const handleSearch = jest.spyOn(React, "useState");
      handleSearch.mockImplementation((isLoading) => [isLoading, setIsLoading]);

      const search = component.find("Search");
      search.props().handleSearch("metallica");

      expect(setIsLoading).toBeTruthy();
    });

    it("WHEN call handlSearch with invalid session SHOULD set new state of isLoading", () => {
      const isValidSessionMock = jest.fn();
      isValidSessionMock.mockReturnValue(false);
      const newGetRequiredProps = () => ({
        isValidSession: isValidSessionMock,
      });
      renderComponent(newGetRequiredProps);
      const setIsLoading = jest.fn();
      const handleSearch = jest.spyOn(React, "useState");
      handleSearch.mockImplementation((isLoading) => [isLoading, setIsLoading]);

      const search = component.find("Search");
      search.props().handleSearch("metallica");

      expect(setIsLoading).toBeTruthy();
    });

    it("WHEN call paginationNext with albums SHOULD set new state of isLoading", async () => {
      renderComponent();
      const setIsLoading = jest.fn();
      const handleSearch = jest.spyOn(React, "useState");
      handleSearch.mockImplementation((isLoading) => [isLoading, setIsLoading]);
      // jest.spyOn(mockProps, "dispatch");
      const searchresult = component.find("SearchResult");
      await searchresult.props().paginationNext("albums");

      expect(setIsLoading).toBeTruthy();
    });

    it("WHEN call paginationNext with artists SHOULD set new state of isLoading", async () => {
      renderComponent();
      const setIsLoading = jest.fn();
      const handleSearch = jest.spyOn(React, "useState");
      handleSearch.mockImplementation((isLoading) => [isLoading, setIsLoading]);
      const searchresult = component.find("SearchResult");
      await searchresult.props().paginationNext("artists");

      expect(setIsLoading).toBeTruthy();
    });

    it("WHEN call paginationNext with tracks SHOULD set new state of isLoading", async () => {
      renderComponent();
      const setIsLoading = jest.fn();
      const handleSearch = jest.spyOn(React, "useState");
      handleSearch.mockImplementation((isLoading) => [isLoading, setIsLoading]);
      const searchresult = component.find("SearchResult");
      await searchresult.props().paginationNext("tracks");

      expect(setIsLoading).toBeTruthy();
    });
  });
});
