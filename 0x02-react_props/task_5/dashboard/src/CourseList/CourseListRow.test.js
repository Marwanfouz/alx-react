import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow', () => {
  it('renders one cell with colspan = 2 when textSecondCell does not exist', () => {
    const wrapper = shallow(<CourseListRow isHeader textFirstCell="Header" />);
    const thElement = wrapper.find('th');

    expect(thElement).toHaveLength(1);
    expect(thElement.prop('colSpan')).toEqual(2);
    expect(thElement.text()).toEqual('Header');
  });

  it('renders two cells when textSecondCell is present', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="Header" textSecondCell="Second Header" />
    );
    const thElements = wrapper.find('th');

    expect(thElements).toHaveLength(2);
    expect(thElements.at(0).text()).toEqual('Header');
    expect(thElements.at(1).text()).toEqual('Second Header');
  });

  it('renders correctly two td elements within a tr element', () => {
    const wrapper = shallow(<CourseListRow textFirstCell="Data 1" textSecondCell="Data 2" />);
    const tdElements = wrapper.find('td');

    expect(tdElements).toHaveLength(2);
    expect(tdElements.at(0).text()).toEqual('Data 1');
    expect(tdElements.at(1).text()).toEqual('Data 2');
  });
});
