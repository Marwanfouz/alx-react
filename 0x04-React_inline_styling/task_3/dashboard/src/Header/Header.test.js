import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("<Header />", () => {
  it("renders without crashing", () => {
    const Component = shallow(<Header />);

    expect(Component.exists()).toEqual(true);
  });
  it("render img and h1 tags", () => {
    const Component = shallow(<Header />);

    expect(Component.exists("img")).toEqual(true);
    expect(Component.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});
