'use strict'

import React from 'react';
import SearchTitle from './SearchTitle.js';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <SearchTitle />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

