import React, { Component } from 'react';
import { Container } from 'reactstrap';

import './App.css';

import SearchTitle from './SearchTitle/SearchTitle' ;
import SearchBar from './SearchBar/SearchBar' ;
import SearchResults from './SearchResults/SearchResults' ;
import Search from './Api/Search' ;

export default class App extends Component {

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
    return (
      <Container fluid={true} style={ {
        width: '80%',
        margin: '0 10%'
      }}>

      <SearchTitle />

      <SearchBar
        handleSubmit={(searchTerm) => this.handleSubmit(searchTerm)} />

      <SearchResults
        results={this.state.results}
        handleClick={console.log}
      />


  </Container>
    );
  }
}
