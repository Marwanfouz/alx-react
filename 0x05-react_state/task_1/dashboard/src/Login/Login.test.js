import React from "react";
import { StyleSheetTestUtils } from "aphrodite";
import Login from "./Login";
import { shallow } from "enzyme";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("rendering components", () => {
  it("renders Login component without crashing", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.exists()).toBe(true);
  });

  it("Login component renders 2 <input> and 2 <label> tags", () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.find("label")).toHaveLength(2);
    expect(wrapper.find("input")).toHaveLength(3);
  });
});

describe('Login component', () => {
  it('should render submit button as disabled by default', () => {
    const wrapper = shallow(<Login />);
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.prop('disabled')).toBe(true);
  });

  it("should be enabled when password and email have value", () => {
    const wrapper = shallow(<Login />);
    const email = {
      target: {
        name: "email",
        value: "email",
      },
    };
    const password = {
      target: {
        name: "password",
        value: "password",
      },
    };

    wrapper.find({ name: "email" }).simulate("change", email);
    wrapper.find({ name: "password" }).simulate("change", password);
    expect(wrapper.find('input[type="submit"]').prop("disabled")).toBe(false);
  }); 
});
