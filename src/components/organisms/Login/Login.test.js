import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import "jest-enzyme";
import { LoginUnconnected } from "./Login";

Enzyme.configure({ adapter: new Adapter() });

describe("Login Component", () => {
  let component;
  let mockProps;

  const isValidSessionMock = jest.fn();
  isValidSessionMock.mockReturnValue(true);
  const getRequiredProps = () => ({
    isValidSession: isValidSessionMock,
    location: { state: { session_expired: false } },
  });

  const renderComponent = (overrides = {}) => {
    mockProps = {
      ...getRequiredProps(),
      ...overrides,
    };

    component = shallow(<LoginUnconnected {...mockProps} />);
  };

  describe("Init", () => {
    const { location } = window;

    beforeAll(() => {
      delete window.location;
      window.location = jest.fn();
    });

    afterAll(() => {
      window.location = location;
    });

    it("WHEN component is rendering SHOULD be defined properly", () => {
      renderComponent();

      expect(component).toBeDefined();
    });

    it("WHEN is valid session SHOULD redirect", () => {
      renderComponent();
      const redirect = component.find("Redirect");

      expect(redirect).toHaveLength(1);
    });

    it("WHEN is not valid session SHOULD render header and button component", () => {
      const isValidSessionMock = jest.fn();
      isValidSessionMock.mockReturnValue(false);
      const newgetRequiredProps = {
        isValidSession: isValidSessionMock,
        location: { state: { session_expired: false } },
      };
      renderComponent(newgetRequiredProps);
      const header = component.find("Header");
      const button = component.find("Button");

      expect(header).toHaveLength(1);
      expect(button).toHaveLength(1);
    });

    it("WHEN is not valid session and expired SHOULD render info message", () => {
      const isValidSessionMock = jest.fn();
      isValidSessionMock.mockReturnValue(false);
      const newgetRequiredProps = {
        isValidSession: isValidSessionMock,
        location: { state: { session_expired: true } },
      };
      renderComponent(newgetRequiredProps);
      const info = component.find(".login__nav--error");

      expect(info.text()).toEqual("Session expired. Please login again.");
    });

    it("WHEN click SHOULD call spotify accounts url with properly params", () => {
      const isValidSessionMock = jest.fn();
      isValidSessionMock.mockReturnValue(false);
      const newgetRequiredProps = {
        isValidSession: isValidSessionMock,
        location: { state: { session_expired: false } },
      };
      renderComponent(newgetRequiredProps);
      component.find("Button").simulate("click");

      expect(window.location).toEqual(
        "https://accounts.spotify.com/authorize?client_id=23f1ff0185814de9a657b9f02999a73f&redirect_uri=http://localhost:3000/redirect&response_type=token&show_dialog=true"
      );
    });
  });
});
