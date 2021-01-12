import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';

const Contact = (props) => {
  return (
    <>
      <Header title="Contact" description="This is a modified jumbotron that occupies the entire horizontal space of its parent." />
      <Container className="text-center font-weight-bold">
        <p>Pedro A. González</p>
        <p>+52 (998) 845 8554</p>
        <p>pgonzalez@post.com</p>
        <p>@pedroagont</p>
      </Container>
    </>
  );
};

export default Contact;
