import React, { Component } from 'react';
import { Container, Media, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import './SearchResults.css';

class Movie extends Component {
  render() {
    const movie = this.props.movie;
    let year = this.props.movie.year ;
    if (year.length > 4) {
      year = year.substr(0, 4);
    }

    return(
      <ListGroupItem
        tag="button" action={true}
        onClick={() => this.props.handleClick(this.props.name)}
      >
        <Row>
          <Col sm={2}>
            <Media object data-src={movie.thumbnail} className="img-circle" />
          </Col>
          <Col sm={10}>
            <ListGroupItemHeading>{movie.name} <i className="small">({year})</i></ListGroupItemHeading>
            <ListGroupItemText>{movie.description}</ListGroupItemText>
          </Col>
        </Row>

      </ListGroupItem>
    );
  }
}

export default class SearchResults extends Component {

  render() {
    const results = this.props.results || [] ;
    const movieList = results.map( (item, key) => {
      return (
        <Movie
          movie={item}
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
          {movieList}
        </ListGroup>
      </Container>
    );
  }
}
