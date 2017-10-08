'use strict'

import React from 'react';
import MoviePage from './MoviePage';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MoviePage />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

