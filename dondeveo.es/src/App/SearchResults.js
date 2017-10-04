import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import './SearchResults.css';

class Movie extends Component {
  render() {
    return(
      <ListGroupItem
        tag="button" action={true}
        onClick={() => this.props.handleClick(this.props.name)}
      >
        <ListGroupItemHeading>{this.props.name}</ListGroupItemHeading>
        <ListGroupItemText>{this.props.description}</ListGroupItemText>
      </ListGroupItem>
    );
  }
}

export default class SearchResults extends Component {

  render() {
    const results = this.props.results.map( (item, key) => {
      return (
        <Movie
          key={key}
          name={item.name}
          thumbnail={item.image || null}
          handleClick={this.props.handleClick}
          description={item.description}
        />
      );
    });

    return (
      <Container>
        <hr />
        <p>
          { results.length > 0 ?`Mostrando ${results.length} resultados` : '' }
        </p>
        <ListGroup className="search-results">
          {results}
        </ListGroup>
      </Container>
    );
  }
}
