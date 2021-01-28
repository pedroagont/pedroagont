import { Container } from 'reactstrap';
import React from 'react';
import Header from '../components/Header';
import Deck from '../components/Deck';

const Collabs = (props) => {
  const collabsArray = [
    {
      id: 1,
      img: 'https://picsum.photos/300/200',
      alt: 'canieti',
      title: 'CANIETI',
      category: '#tech #it #community',
      description: 'Active member of Chamber at the Southeast region.',
      slug: 'collabs/canieti',
    },
    {
      id: 2,
      img: 'https://picsum.photos/300/200',
      alt: 'origen radio',
      title: 'Origen Radio',
      category: '#tech #social #news',
      description: 'Weekly tech news as guest speaker #MartesDeTecnología.',
      slug: 'collabs/origenradio',
    },
    {
      id: 3,
      img: 'https://picsum.photos/300/200',
      alt: 'emprendible',
      title: 'Emprendible',
      category: '#entrepreneurship #startups',
      description: 'Associated Consultant and Mentor.',
      slug: 'collabs/emprendible',
    },
    {
      id: 4,
      img: 'https://picsum.photos/300/200',
      alt: 'pitch awards',
      title: 'Pitch Awards',
      category: '#entrepreneurship #events',
      description: 'Organizer team and event host.',
      slug: 'collabs/pitchawards',
    },
    {
      id: 5,
      img: 'https://picsum.photos/300/200',
      alt: 'pecha kucha nights',
      title: 'Pecha Kucha Nights',
      category: '#creative #social #events',
      description: 'Cancún city organizer team and event host.',
      slug: 'collabs/pechakucha',
    },
    {
      id: 6,
      img: 'https://picsum.photos/300/200',
      alt: 'fuckup nights',
      title: 'FuckUp Nights',
      category: '#startup #social #events',
      description: 'Cancún city anniversary organizer team and event host.',
      slug: 'collabs/fuckup',
    },
    {
      id: 7,
      img: 'https://picsum.photos/300/200',
      alt: 'imjuve',
      title: 'IMJUVE',
      category: '#youth #social #innovation',
      description: 'Member of the Youth 2030 Innovators.',
      slug: 'collabs/imjuve',
    },
    {
      id: 8,
      img: 'https://picsum.photos/300/200',
      alt: 'cancun tech city',
      title: 'Cancún Tech City',
      category: '#tech #social #community',
      description: 'Founding member, program manager and web designer.',
      slug: 'collabs/cancuntechcity',
    },
    {
      id: 9,
      img: 'https://picsum.photos/300/200',
      alt: 'alianza del pacifico',
      title: 'Alianza del Pacífico',
      category: '#youth #social #regional',
      description: 'Youth active community member.',
      slug: 'collabs/alianzadelpacifico',
    },
    {
      id: 10,
      img: 'https://picsum.photos/300/200',
      alt: 'anuies tic',
      title: 'ANUIES-TIC',
      category: '#tech #it #education',
      description: 'Media partner and part of the organizer team.',
      slug: 'collabs/anuiestic',
    },
    {
      id: 11,
      img: 'https://picsum.photos/300/200',
      alt: 'wispmx',
      title: 'WispMX',
      category: '#internet #development #community',
      description: 'Affiliated and active community member.',
      slug: 'collabs/wispmx',
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
