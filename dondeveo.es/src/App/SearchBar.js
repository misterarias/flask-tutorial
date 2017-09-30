import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {

  handleSubmit() {
    console.log("Click");
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
            name="searchbar"
            defaultValue="Search me!"
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
