import * as React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Search from "./Search";

Enzyme.configure({ adapter: new Adapter() });

describe("Search Component", () => {
  let component;
  const mockHandleSearch = jest.fn();
  let mockProps;

  const getRequiredProps = () => ({
    handleSearch: mockHandleSearch,
    handleSearchInvalid: jest.fn(),
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<Search {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN event click SHOULD not call callback without searchValue", () => {
      renderComponent();

      component.find("Button").simulate("click");
      expect(mockHandleSearch.mock.calls.length).toEqual(0);
    });
  });
});
