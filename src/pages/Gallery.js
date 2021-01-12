import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import { Card, CardImg, CardColumns } from 'reactstrap';

const Gallery = (props) => {
  return (
    <>
      <Header title="Gallery" description="This is a modified jumbotron that occupies the entire horizontal space of its parent." />
      <Container>
        <CardColumns>
          <Card>
            <CardImg top width="100%" src="https://picsum.photos/500/200" alt="Card image cap" />
          </Card>
          <Card>
            <CardImg top width="100%" src="https://picsum.photos/400/300" alt="Card image cap" />
          </Card>
          <Card>
            <CardImg top width="100%" src="https://picsum.photos/600/300" alt="Card image cap" />
          </Card>
          <Card>
            <CardImg top width="100%" src="https://picsum.photos/400/800" alt="Card image cap" />
          </Card>
          <Card>
            <CardImg top width="100%" src="https://picsum.photos/300/200" alt="Card image cap" />
          </Card>
          <Card>
            <CardImg top width="100%" src="https://picsum.photos/1020/800" alt="Card image cap" />
          </Card>
        </CardColumns>
      </Container>
    </>
  );
};

export default Gallery;
