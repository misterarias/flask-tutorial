import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';
import './App.css';

import SearchBar from './SearchBar' ;
import SearchResults from './SearchResults' ;

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      results: []
    }
  }

  doSearch(searchTerm) {
    return [
      {
        name: "Movie 1",
        description: "The best movie ever"
      },
      {
        name: "Movie 2",
        description: "Much better than Movie 1"
      }
    ]
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
