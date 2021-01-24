import { Container } from 'reactstrap';
import React from 'react';
import Header from '../components/Header';
import Deck from '../components/Deck';

const Collabs = (props) => {
  const collabsArray = [
    {
      id: 1,
      img: 'https://picsum.photos/300/200',
      title: 'CANIETI',
      category: 'tech, social',
      description: 'Cool stuff with the Internet bois',
      slug: 'collabs/canieti',
    },
    {
      id: 2,
      img: 'https://picsum.photos/300/200',
      title: 'Acustik',
      category: 'tech, social',
      description: 'Cool stuff with the Internet bois',
      slug: 'collabs/acustik',
    },
    {
      id: 3,
      img: 'https://picsum.photos/300/200',
      title: 'Incuvita',
      category: 'tech, social',
      description: 'Cool stuff with the Internet bois',
      slug: 'collabs/incuvita',
    },
    {
      id: 4,
      img: 'https://picsum.photos/300/200',
      title: 'Emprendible',
      category: 'tech, social',
      description: 'Cool stuff with the Internet bois',
      slug: 'collabs/emprendible',
    },
    {
      id: 5,
      img: 'https://picsum.photos/300/200',
      title: 'Pitch Awards',
      category: 'tech, social',
      description: 'Cool stuff with the Internet bois',
      slug: 'collabs/pitchawards',
    },
    {
      id: 6,
      img: 'https://picsum.photos/300/200',
      title: 'Pecha Kucha Nights',
      category: 'tech, social',
      description: 'Cool stuff with the Internet bois',
      slug: 'collabs/pechakucha',
    },
    {
      id: 7,
      img: 'https://picsum.photos/300/200',
      title: 'FuckUp Nights',
      category: 'tech, social',
      description: 'Cool stuff with the Internet bois',
      slug: 'collabs/fuckup',
    },
    {
      id: 8,
      img: 'https://picsum.photos/300/200',
      title: 'IMJUVE',
      category: 'tech, social',
      description: 'Cool stuff with the Internet bois',
      slug: 'collabs/imjuve',
    },
    {
      id: 9,
      img: 'https://picsum.photos/300/200',
      title: 'Alianza del Pacífico',
      category: 'tech, social',
      description: 'Cool stuff with the Internet bois',
      slug: 'collabs/alianzadelpacifico',
    },
  ]

  return (
    <>
      <Header title="Collabs" description="This is a modified jumbotron that occupies the entire horizontal space of its parent." />
      <Container>
        <Deck array={collabsArray}/>
      </Container>
    </>
  );
};

export default Collabs;
