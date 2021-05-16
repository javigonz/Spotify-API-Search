import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Button from "./Button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button Component", () => {
  let component;
  let mockProps;
  const mockCallBack = jest.fn();

  const getRequiredProps = () => ({
    text: "Test",
    onClick: mockCallBack,
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<Button {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN event click SHOULD call onClick callback", () => {
      renderComponent();

      component.find("button").simulate("click");

      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
