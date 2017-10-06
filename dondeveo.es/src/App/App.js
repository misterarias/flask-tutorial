import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';

import './App.css';

import SearchBar from './SearchBar' ;
import SearchResults from './SearchResults' ;
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
      <Row>
        <Col className="border" xs="2"></Col>

        <Col xs={8}>
          <SearchBar
            onSubmit={(searchTerm) => this.handleSubmit(searchTerm)}
          />

        <SearchResults
          results={this.state.results}
          handleClick={console.log}
        />
      </Col>

      <Col className="border" xs={2}></Col>

    </Row>
    );
  }
}
