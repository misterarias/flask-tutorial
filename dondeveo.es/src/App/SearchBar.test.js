'use strict'

import React from 'react';
import SearchBar from './SearchBar';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SearchBar />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('searchBar starts with the default text', () => {
  // Render a checkbox with label in the document
  const searchBar = shallow(
    <SearchBar />
  );

  const searchBarForm = searchBar.find('input');
  expect(searchBarForm.length).toBe(1) ;
});
