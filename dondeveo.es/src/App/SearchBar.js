import React, { Component } from 'react';
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
      <div className="container">

        <header className="header">
          <h1 className="title">¿Dónde veo...?</h1>
        </header>

        <section className="searchbar">

          <input
            type="text"
            onChange={this.handleChange}
            context="Search"
          />

          <button
            className="submit"
            onClick={this.handleSubmit}
          >GO</button>

        </section>
      </div>
    )
  }
}
