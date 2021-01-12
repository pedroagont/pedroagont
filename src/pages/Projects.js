import React from 'react';
import { Container } from 'reactstrap';
import Header from '../components/Header';
import Deck from '../components/Deck';

const Projects = (props) => {
  const projectsArray = [
    {
      id: 1,
      img: 'https://picsum.photos/300/200',
      title: 'Kaanbal',
      category: 'tech, social, entrepreneurship',
      description: 'Cool stuff with the Internet bois',
      slug: 'projects/kaanbal',
    },
    {
      id: 2,
      img: 'https://picsum.photos/300/200',
      title: 'Neonwave',
      category: 'digital marketing, tech',
      description: 'Cool stuff with the Internet bois',
      slug: 'projects/neonwave',
    },
    {
      id: 3,
      img: 'https://picsum.photos/300/200',
      title: 'DEV.F',
      category: 'digital marketing, tech',
      description: 'Cool stuff with the Internet bois',
      slug: 'projects/devf',
    },
    {
      id: 4,
      img: 'https://picsum.photos/300/200',
      title: 'Tech Garage',
      category: '#digitalmarketing #tech',
      description: 'Cool stuff with the Internet bois',
      slug: 'projects/techgarage',
    },
    {
      id: 5,
      img: 'https://picsum.photos/300/200',
      title: 'Cerebro Digital',
      category: 'digital marketing, tech',
      description: 'Cool stuff with the Internet bois',
      slug: 'projects/cerebrodigital',
    },
    {
      id: 6,
      img: 'https://picsum.photos/300/200',
      title: 'Internet Society',
      category: 'digital marketing, tech',
      description: 'Cool stuff with the Internet bois',
      slug: 'projects/internetsociety',
    },
  ]

  return (
    <>
      <Header title="Projects" description="This is a modified jumbotron that occupies the entire horizontal space of its parent." />
      <Container className="mb-5">
        <Deck array={projectsArray}/>
      </Container>
    </>
  );
};

export default Projects;
