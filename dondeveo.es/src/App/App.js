import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SearchBar from './SearchBar' ;
import SearchResults from './SearchResults' ;

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchResults />
        <SearchBar />
      </div>
    );
  }
}
