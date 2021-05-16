import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import Categories from "./Categories";

Enzyme.configure({ adapter: new Adapter() });

describe("Categories Component", () => {
  let component;
  let mockProps;

  const getRequiredProps = () => ({
    result: {
      albums: { items: ["foo"] },
      artists: { items: ["bar"] },
      tracks: { items: ["zee"] },
    },
    onSelected: jest.fn(),
    selectedCategory: "album",
    totalItems: "250",
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<Categories {...mockProps} />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN result have 3 items SHOULD render 3 buttons", () => {
      renderComponent();
      const button = component.find("ButtonCategory");

      expect(button).toHaveLength(3);
    });

    it("WHEN result have 1 item SHOULD render 1 button", () => {
      const newProps = {
        result: {
          albums: { items: ["foo"] },
        },
        onSelected: jest.fn(),
        selectedCategory: "album",
        totalItems: "250",
      };
      renderComponent(newProps);
      const button = component.find("ButtonCategory");

      expect(button).toHaveLength(1);
    });

    it("WHEN click SHOULD callback handle", () => {
      const mockCallBack = jest.fn();
      const newProps = {
        result: {
          albums: { items: ["foo"] },
        },
        onSelected: mockCallBack,
        selectedCategory: "album",
        totalItems: "250",
      };
      renderComponent(newProps);
      const button = component.find("ButtonCategory");
      button.simulate("click");

      expect(mockCallBack.mock.calls.length).toEqual(1);
    });
  });
});
