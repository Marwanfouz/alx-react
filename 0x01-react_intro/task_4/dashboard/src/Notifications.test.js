import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';

describe('<Notifications />', () => {
  it("renders without crashing", () => {
    const component = shallow(<Notifications />);

    expect(component).toBeDefined();
  });
  it("Notifications renders ul", () => {
    const component = shallow(<Notifications />);

    expect(component.find("ul")).toBeDefined();
  });
  it("Notifications renders three list items", () => {
    const component = shallow(<Notifications />);

    expect(component.find("li")).toHaveLength(3);
  });
  it("Notifications renders Text", () => {
    const component = shallow(<Notifications />);

    expect(component.find("p").text()).toBe(
      "Here is the list of notifications"
      );
  });

});
