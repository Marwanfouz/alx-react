import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";

describe("<Login />", () => {
  it("renders without crashing", () => {
    const Component = shallow(<Login />);

    expect(Component.exists()).toEqual(true);
  });
  it("renders 2 input tags and 2 label tags", () => {
    const Component = shallow(<Login />);

    expect(Component.find("input")).toHaveLength(2);
    expect(Component.find("label")).toHaveLength(2);
  });
});
