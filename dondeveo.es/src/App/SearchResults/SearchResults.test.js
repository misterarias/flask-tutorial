'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import SearchResults from './SearchResults';

import { MemoryRouter, Route } from 'react-router-dom'

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
    <MemoryRouter >
      <SearchResults />
    </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders correctly with results', () => {
  const tree = renderer.create(
    <MemoryRouter >
      <SearchResults
        results={testMovieList}
      />
    </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('SearchResults starts with an empty list', () => {
  const searchResults = mount(
    <MemoryRouter >
      <SearchResults />
    </MemoryRouter>
  );

  const results = searchResults.find('ul').children();
  expect(results.length).toBe(0) ;
});

test('SearchResults renders results', () => {

  const searchResults = mount(
    <MemoryRouter >
      <SearchResults results={testMovieList}/>
    </MemoryRouter>
  );

  const renderedMovieList = searchResults.find('ul').children();
  expect(renderedMovieList.length).toBe(2) ;
  expect(renderedMovieList.first().find('h5').text()).toBe('Movie 1 (2010)');
  expect(renderedMovieList.last().find('h5').text()).toBe('Movie 2 (2017)');
});

test('SearchResults renders Routers for each link', () => {

  const searchResults = mount(
    <MemoryRouter >
      <SearchResults results={testMovieList} />
    </MemoryRouter>
  );

  const movieList = searchResults.find(Route);
  expect(movieList.length).toBe(2);
});
