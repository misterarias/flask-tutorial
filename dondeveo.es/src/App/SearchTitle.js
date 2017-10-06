import React from 'react';
import { Row, Jumbotron } from 'reactstrap';
import './SearchTitle.css' ;

const SearchTitle = (props) => {
  return (
    <Row>
      <Jumbotron>
        <h1 className="display-3">dondeveo.es</h1>

        <p class="lead opacity-75">
          Busca aquí donde puedes ver la peli que te apetezca
        </p>

      </Jumbotron>
    </Row>
  );
}

export default SearchTitle;
