import React, { Component } from 'react';
import './SearchResults.css';

export default class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <ul id="results"></ul>
      </div>
    );
  }
}
