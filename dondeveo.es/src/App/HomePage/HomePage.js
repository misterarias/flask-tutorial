import React, { Component } from 'react';

import SearchBar from '../SearchBar/SearchBar' ;
import SearchResults from '../SearchResults/SearchResults' ;
import Search from '../Api/Search' ;

export default class HomePage extends Component  {

  constructor() {
    super();

    this.state = {
      results: []
    }
  }

  doSearch(searchTerm) {
    const movieSet =  Search.results();
    if (movieSet.total_results === 0) return []
    return movieSet.results.map( (item, key) => {
      return {
        'name': item.original_title,
        'description': item.overview,
        'thumbnail': item.poster_path,
        'year': item.release_date
      }
    });
  }

  handleSubmit(searchTerm) {
    const searchResults = this.doSearch(searchTerm);
    this.setState({
      results: searchResults
    });
  }

  render() {
    return <div>
      <SearchBar
        handleSubmit={(searchTerm) => this.handleSubmit(searchTerm)} />

      <SearchResults
        results={this.state.results}
      />
    </div>
  }
}

