import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe('<App />', () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });
  it("renders a div with the class App-header", () => {
    const component = shallow(<App />);

    expect(component.find(".App-header")).toBeDefined();
  });
  it("renders a div with the class App-body", () => {
    const component = shallow(<App />);

    expect(component.find(".App-body")).toBeDefined();
  });
  it("renders a div with the class App-footer", () => {
    const component = shallow(<App />);

    expect(component.find(".App-footer")).toBeDefined();
  });
});
