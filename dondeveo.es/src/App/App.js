import React from 'react';
import { Container } from 'reactstrap';

import './App.css';

import SearchTitle from './SearchTitle/SearchTitle' ;
import HomePage from './HomePage/HomePage';
import MoviePage from './MoviePage/MoviePage' ;

import {Switch, Route} from 'react-router';

const App = () => {
  return (
    <Container fluid={true} style={ {
      width: '80%',
      margin: '0 10%'
    }}>

    <SearchTitle />

    <Switch>
      <Route path='/movie/:movie' component={MoviePage}/>
      <Route path='/' component={HomePage} />
    </Switch>

  </Container>
  )
}

export default App;
