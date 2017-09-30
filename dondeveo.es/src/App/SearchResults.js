import React, { Component } from 'react';
import './SearchResults.css';

class Movie extends Component {
  render() {
  return(
    <div className="result" onClick={() => this.props.handleClick(this.props.name)}>
      <h3>{this.props.name}</h3>
      <p>{this.props.description}</p>
    </div>
  );
  }
}

export default class SearchResults extends Component {

  constructor(props) {
    super();

    this.state = {
      results: props.results || []
    };
  }

  render() {
    const results = this.state.results.map( (item, key) => {
      return (
        <li key={key}>
          <Movie
            name={item}
            handleClick={this.props.handleClick}
            description="Created in a map()"
          />
        </li>
      );
    });

    return (
      <div className="search-results">
        <ul id="results">{results}</ul>
      </div>
    );
  }
}
