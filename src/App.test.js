import React from "react";
import Enzyme, { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router";
import configureStore from "redux-mock-store";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { createMemoryHistory } from "history";
import "jest-enzyme";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });

describe("App Component", () => {
  let component;
  const store = configureStore()({});

  describe("Init", () => {
    it("valid path to login", () => {
      const component = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(component.find("LoginUnconnected"));
    });
  });
});
