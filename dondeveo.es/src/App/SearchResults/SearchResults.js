import React, { Component } from 'react';
import { Media, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import ApiInfo from '../Api/ApiUtils' ;
import './SearchResults.css';

import { Route } from 'react-router-dom' ;

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

    return <Route render={ ({history}) => (
      <ListGroupItem
        action={true}
        className="listItem"
        onClick={ () => { history.push(`/movie/${movie.name}`); } }
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
    )
    } />
  }
}

class SearchResults extends Component {


  render() {
    const results = this.props.results || [] ;
    const movieList = results.map( (item, key) => {
      return (
        <Movie
          key={key}
          movie={item}
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

export default SearchResults;
