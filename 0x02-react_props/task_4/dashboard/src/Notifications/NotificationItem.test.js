import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("<NotificationItem />", () => {
  it('rendering without crashing', () => {
    const Component = shallow(<NotificationItem />);

    expect(Component.exists()).toEqual(true);
  });
  it('renders the correct html (for example: type=“default” and value=“test”)', () => {
    const Component = shallow(<NotificationItem />);

    Component.setProps({ type: "default", value: "test" });
    expect(Component.html()).toEqual('<li data-notification-type="default">test</li>');
  });
  it('renders the correct html (for example: html={{ __html: "<u>test</u>" }})', () => {
    const Component = shallow(<NotificationItem />);

    Component.setProps({ html: "<u>test</u>" });
    expect(Component.html()).toEqual('<li data-urgent="true"><u>test</u></li>');
  });
});
