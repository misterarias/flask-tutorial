import React, { Component } from 'react';
import { Input, Button, Container, Col, Row, Jumbotron } from 'reactstrap';

import './SearchBar.css';

export default class SearchBar extends Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      query: ""
    }
  }

  handleChange(ev) {
    this.setState({
      query: ev.target.value
    });
  }

  handleSubmit(ev) {
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className="display-3">¿Dónde veo.... ?</h1>

            <p className="lead">
              Busca aquí dónde ver la peli que te apetezca
            </p>

          </Container>
        </Jumbotron>

        <Row >
          <Col sm={10}>
            <Input
              type="text"
              name="searchTerm"
              onChange={this.handleChange}
              placeholder="Título de película..."
            />
          </Col>

          <Col sm={2}>
            <Button
              block
              color="primary"
              onClick={this.handleSubmit}
            > Search </Button>
          </Col>
        </Row>
      </div>
    )
  }
}
