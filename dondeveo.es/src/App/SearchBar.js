import React, { Component } from 'react';
import { Row, Button, Col, Form, FormGroup, Input } from 'reactstrap';

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
      <Row >
          <Col sm={10}>
            <Input
              type="text" name="text" id="searchForm" placeholder="Título de película..."
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
    )
  }
}
