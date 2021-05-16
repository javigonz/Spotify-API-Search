import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import NotFound from "./NotFound";

Enzyme.configure({ adapter: new Adapter() });

describe("NotFound Component", () => {
  let component;

  const renderComponent = () => {
    component = shallow(<NotFound />);
  };

  describe("Init", () => {
    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });
  });
});
