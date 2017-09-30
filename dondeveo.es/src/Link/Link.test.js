// Link.test.js  (partial)
// Copyright 2004-present Facebook. All Rights Reserved.
/* eslint-disable no-unused-vars */

'use strict'

import React from 'react';
import Link from './Link';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('changes state on mouse enter', () => {
 const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  );
  let tree = component.toJSON();

  // manually trigger the callback
  tree.props.onMouseEnter();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
