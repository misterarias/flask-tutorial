import React, { Component } from 'react';
import { Media, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ApiInfo from '../Api/ApiUtils' ;
import './SearchResults.css';


class Movie extends Component {
  render() {
    const movie = this.props.movie;

    let year = this.props.movie.year ;
    if (year.length > 4) {
      year = year.substr(0, 4);
    }

    let thumbnail = movie.thumbnail;
    if (thumbnail) {
      thumbnail = new ApiInfo().getImagePath(thumbnail);
    }

    return(
      <ListGroupItem
        action={true}
        className="listItem"
        onClick={() => this.props.handleClick(movie.name)}
      >
        <Row>
          <Col sm={2}>
            <Media object src={thumbnail} className="img-circle" />
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
          key={key}
          movie={item}
          handleClick={this.props.handleClick}
        />
      );
    });

    return (
      <Row>
        <Col sm={12}>

          <p className="lead">
            { results.length > 0 ?`Mostrando ${results.length} resultados` : '' }
          </p>

          <ListGroup className="search-results">
            {movieList}
          </ListGroup>

        </Col>
      </Row>
    );
  }
}