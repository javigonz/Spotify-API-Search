import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Header from "./Header";

Enzyme.configure({ adapter: new Adapter() });

describe("Header Component", () => {
  let component;
  let mockProps;

  const getRequiredProps = () => ({
    value: "Test",
    onChange: jest.fn(),
    placeholder: "this is the placeholder",
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<Header {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });
  });
});
