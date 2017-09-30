'use strict'

import React from 'react';
import SearchResults from './SearchResults';

import sinon from 'sinon';

import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

import renderer from 'react-test-renderer';

it('renders correctly when empty', () => {
  const tree = renderer.create(
    <SearchResults />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});


it('renders correctly with results', () => {
  const results = ['Movie 1', 'Movie 2'];
  const tree = renderer.create(
    <SearchResults results={results}
    />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('SearchResults starts with an empty list', () => {
  const searchResults = shallow(
    <SearchResults />
  );

  const results = searchResults.find('#results');
  expect(results.length).toBe(1) ;
  expect(results.find('li').length).toBe(0) ;
});

test('SearchResults renders results', () => {
  const movieList = ['Movie 1', 'Movie 2'];
  const searchResults = shallow(
    <SearchResults results={movieList}/>
  );

  const renderedMovieList = searchResults.find('#results').children();
  expect(renderedMovieList.length).toBe(2) ;
});

test('SearchResults renders clickable links', () => {
  const movieList = ['Movie 1']
  const mockEvent = sinon.spy();

  const searchResults = mount(
    <SearchResults results={movieList} handleClick={mockEvent}/>
  );

  const renderedMovieList = searchResults.find('div.result');
  renderedMovieList.simulate('click') ;
  expect(mockEvent.calledOnce).toBeTruthy();
  expect(mockEvent.args[0][0]).toBe('Movie 1');
});
