'use strict'

import React from 'react';
import SearchResults from './SearchResults';

import sinon from 'sinon';

import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import renderer from 'react-test-renderer';

const testMovieList = [
  {
    name: "Movie 1",
    description: "The best movie ever",
    year: '2010-01-01'
  },
  {
    name: "Movie 2",
    description: "Much better than Movie 1",
    year: '2017',
    thumbnail: 'real_path.jpg'
  }
];

it('renders correctly when empty', () => {
  const tree = renderer.create(
    <SearchResults />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders correctly with results', () => {
  const tree = renderer.create(
    <SearchResults
      results={testMovieList}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('SearchResults starts with an empty list', () => {
  const searchResults = mount(
    <SearchResults />
  );

  const results = searchResults.find('ul').children();
  expect(results.length).toBe(0) ;
});

test('SearchResults renders results', () => {

  const searchResults = mount(
    <SearchResults results={testMovieList}/>
  );

  const renderedMovieList = searchResults.find('ul').children();
  expect(renderedMovieList.length).toBe(2) ;
});

test('SearchResults renders clickable links', () => {
  const mockEvent = sinon.spy();

  const searchResults = mount(
    <SearchResults
      results={testMovieList}
      handleClick={mockEvent}
    />
  );

  const movieList = searchResults.find('li') ;
  movieList.first().simulate('click') ;
  expect(mockEvent.callCount).toBe(1);
  expect(mockEvent.args[0][0]).toBe('Movie 1');

  movieList.last().simulate('click') ;
  expect(mockEvent.callCount).toBe(2);
  expect(mockEvent.args[1][0]).toBe('Movie 2');
});
