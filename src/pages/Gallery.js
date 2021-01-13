import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import Images from '../components/Images';

const Gallery = (props) => {
  const galleryArray = [
    {
      id: 1,
      src: 'https://picsum.photos/500/200',
      alt: 'Cool stuff',
    },
    {
      id: 2,
      src: 'https://picsum.photos/400/300',
      alt: 'Cool stuff',
    },
    {
      id: 3,
      src: 'https://picsum.photos/600/300',
      alt: 'Cool stuff',
    },
    {
      id: 4,
      src: 'https://picsum.photos/400/800',
      alt: 'Cool stuff',
    },
    {
      id: 5,
      src: 'https://picsum.photos/300/200',
      alt: 'Cool stuff',
    },
    {
      id: 6,
      src: 'https://picsum.photos/1020/800',
      alt: 'Cool stuff',
    },
    {
      id: 7,
      src: 'https://picsum.photos/500/200',
      alt: 'Cool stuff',
    },
    {
      id: 8,
      src: 'https://picsum.photos/400/300',
      alt: 'Cool stuff',
    },
    {
      id: 9,
      src: 'https://picsum.photos/600/300',
      alt: 'Cool stuff',
    },
    {
      id: 10,
      src: 'https://picsum.photos/400/800',
      alt: 'Cool stuff',
    },
    {
      id: 11,
      src: 'https://picsum.photos/300/200',
      alt: 'Cool stuff',
    },
    {
      id: 12,
      src: 'https://picsum.photos/1020/800',
      alt: 'Cool stuff',
    },
  ]

  return (
    <>
      <Header title="Gallery" description="This is a modified jumbotron that occupies the entire horizontal space of its parent." />
      <Container>
        <Images array={ galleryArray } />
      </Container>
    </>
  );
};

export default Gallery;
