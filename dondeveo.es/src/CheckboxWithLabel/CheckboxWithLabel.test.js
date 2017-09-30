'use strict'

import React from 'react';
import CheckboxWithLabel from './CheckboxWithLabel';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <CheckboxWithLabel
      labelOn="ON" labelOff="OFF"
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(
    <CheckboxWithLabel labelOn="On" labelOff="Off" />
  );

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
