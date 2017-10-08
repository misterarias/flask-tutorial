import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

import MoviePage from './MoviePage/MoviePage' ;
import SearchBar from './SearchBar/SearchBar' ;
import SearchTitle from './SearchTitle/SearchTitle' ;

import { MemoryRouter} from 'react-router-dom'

import { mount, configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

it('renders default path without crashing', () => {
  const tree = renderer.create(
    <MemoryRouter >
      <App />
    </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders "/movies"  path without crashing', () => {
  const tree = renderer.create(
    <MemoryRouter initialEntries={[ '/movie/Rambo' ]}  >
      <App />
    </MemoryRouter>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('App has the expected elements when on the default path', () => {
  const app = mount(
    <MemoryRouter >
      <App />
    </MemoryRouter>
  );

  expect(app.find(SearchTitle).length).toBe(1);
  expect(app.find(SearchBar).length).toBe(1);
  expect(app.find(MoviePage).length).toBe(0);
});

test('App has the expected elements when on the "/movies" path', () => {
  const app = mount(
    <MemoryRouter initialEntries={[ '/movie/Rambo' ]}>
      <App />
    </MemoryRouter>
  );

  expect(app.find(SearchTitle).length).toBe(1);
  expect(app.find(SearchBar).length).toBe(0);
  expect(app.find(MoviePage).length).toBe(1);
});
