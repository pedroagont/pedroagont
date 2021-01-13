import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import Images from '../components/Images';

const Details = (props) => {
  return (
    <>
      <Header title={ props.title } description={ props.short_description } />
      <Container>
        <p>{ props.description }</p>
      </Container>
      <Container className="mt-5">
        <Images array={ props.array } />
      </Container>
    </>
  );
};

export default Details;
