import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Redirect from "./Redirect";

Enzyme.configure({ adapter: new Adapter() });

describe("Redirect Component", () => {
  let component;
  let mockProps;

  const getRequiredProps = () => ({
    saveTimeExpired: "",
    history: {
      push: jest.fn(),
    },
    location: { hash: "#foo" },
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = mount(<Redirect {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });
  });
});
