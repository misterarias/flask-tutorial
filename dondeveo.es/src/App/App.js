import React, { Component } from 'react';
import { Container, Col, Row, Jumbotron } from 'reactstrap';
import './App.css';

import SearchBar from './SearchBar' ;
import SearchResults from './SearchResults' ;

export default class App extends Component {

  render() {
    return (
      <Row>
        <Col xs="2"></Col>
        <Col xs="8">

          <Jumbotron fluid>
            <Container fluid>
              <h1 className="display-3">¿Dónde veo.... ?</h1>
              <p className="lead">
                Busca aquí dónde ver la peli que te apeteza
              </p>

              <hr className="my-2" />

              <SearchBar />

            </Container>
          </Jumbotron>


          <SearchResults
            results={[]} handleClick={console.log}
          />
        </Col>
        <Col xs="2"></Col>
      </Row>
    );
  }
}
