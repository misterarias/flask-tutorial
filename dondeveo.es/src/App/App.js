import React, { Component } from 'react';
import './App.css';

import SearchBar from './SearchBar' ;
import SearchResults from './SearchResults' ;

export default class App extends Component {
  render() {
    return (
      <div className="App">
          <SearchBar />
          <SearchResults />
        </div>
    );
  }
}
