import React, { Component } from 'react';
import { Container, Media, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

import './SearchResults.css';

class Movie extends Component {
  render() {
    return(
      <ListGroupItem
        tag="button" action={true}
        onClick={() => this.props.handleClick(this.props.name)}
      >
        <Row>
          <Col sm={2}>
            <Media object data-src={this.props.imageUri} className="img-circle" />
          </Col>
          <Col sm={10}>
            <ListGroupItemHeading>{this.props.name}</ListGroupItemHeading>
            <ListGroupItemText>{this.props.description}</ListGroupItemText>
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
          key={key}
          name={item.name}
          thumbnail={item.imageUri}
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
