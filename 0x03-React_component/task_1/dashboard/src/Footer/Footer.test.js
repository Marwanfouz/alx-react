import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";

describe("<Footer />", () => {
  it("renders without crashing", () => {
    const Component = shallow(<Footer />);

    expect(Component.exists()).toEqual(true);
  });
  it("render the text “Copyright”", () => {
    const Component = shallow(<Footer />);

    expect(Component.text()).toEqual(
      `Copyright ${getFullYear()} - ${getFooterCopy()}`
    );
  });
});
