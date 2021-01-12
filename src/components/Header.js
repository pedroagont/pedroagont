import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const Header = (props) => {
  return (
    <div className="mt-5">
      <Jumbotron className="bg-transparent">
        <Container fluid className="text-center">
          <h1 className="display-3">{ props.title }</h1>
          <p className="lead">{ props.description }</p>
          <hr className="mt-5" />
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Header;
