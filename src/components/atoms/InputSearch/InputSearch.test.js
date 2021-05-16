import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import InputSearch from "./InputSearch";

Enzyme.configure({ adapter: new Adapter() });

describe("InputSearch Component", () => {
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

    component = shallow(<InputSearch {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN component is rendering SHOULD has props", () => {
      renderComponent();

      expect(component.prop("placeholder")).toEqual("this is the placeholder");
      expect(component.prop("value")).toEqual("Test");
    });
  });
});
