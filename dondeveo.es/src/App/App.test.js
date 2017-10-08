import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import SearchResults from './SearchResults/SearchResults';
import SearchBar from './SearchBar/SearchBar' ;

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const tree = renderer.create(
    <App />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

test('App has the expected elements', () => {
  const app = shallow(
    <App />
  );

  expect(app.find(SearchBar).length).toBe(1);
  expect(app.find(SearchResults).length).toBe(1);
});
