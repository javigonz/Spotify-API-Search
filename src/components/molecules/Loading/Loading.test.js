import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Loading from "./Loading";

Enzyme.configure({ adapter: new Adapter() });

describe("Loading Component", () => {
  let component;
  let mockProps;
  const mockCallBack = jest.fn();

  const getRequiredProps = () => ({
    open: true,
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<Loading {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN isloading SHOULD show component", () => {
      renderComponent();
      const loading = component.find(".loading");

      expect(loading).toHaveLength(1);
    });

    it("WHEN not isloading  SHOULD not show component", () => {
      renderComponent({ open: false });
      const loading = component.find(".loading");

      expect(loading).toHaveLength(0);
    });
  });
});
