import React from "react";
import BodySection from "./BodySection";
import BodySectionWithMarginBottom from "./BodySectionWithMarginBottom"
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("<BodySectionWithMarginBottom />", () => {
  it("render correctly a BodySection component and that the props are passed correctly to the child component", () => {
    const wrapper = shallow(<BodySectionWithMarginBottom title="test title" />);

    expect(wrapper.find(BodySection)).toHaveLength(1);
    expect(wrapper.find(BodySection).html()).toEqual(
      '<div class="bodySection"><h2>test title</h2></div>'
    );
  });
});
