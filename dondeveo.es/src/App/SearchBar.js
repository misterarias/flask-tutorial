import React, { Component } from 'react';
import { Input, Button, Col, Row } from 'reactstrap';

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
    this.props.handleSubmit(this.state.query);
  }

  render() {

    const pushBottomStyle = {
      marginBottom: '1rem'
    }

    return (
      <Row style={pushBottomStyle}>

        <Col sm={10} >
          <Input
            type="text"
            name="searchTerm"
            onChange={this.handleChange}
            placeholder="Título de película..."
          />
        </Col>

        <Col sm={2}>
          <Button
            color="primary"
            onClick={this.handleSubmit}
          > Search </Button>
        </Col>

      </Row>
    )
  }
}
