import React from 'react';
import { Button, Col, Container, Media, Row } from 'reactstrap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Projects = (props) => {
  const projectsArray = [
    {
      id: 1,
      img: 'https://picsum.photos/500/300',
      alt: 'kaanbal',
      title: 'Kaanbal Innovación Social A.C.',
      role: 'President & Co-Founder',
      category: '#education #social #innovation',
      description: 'Award winning mexican non-profit organization focused on promoting digital inclusion in rural education in México and Latin America through social initiatives and programs based on innovation and technology.',
      slug: 'projects/kaanbal',
    },
    {
      id: 2,
      img: 'https://picsum.photos/500/300',
      alt: 'neonwave',
      title: 'Neonwave Agency',
      role: 'CTO & Co-Founder',
      category: '#web #marketing #design',
      description: 'Digital agency made of passion and commitment that proudly delivers web development, branding, graphic design and marketing data driven projects.',
      slug: 'projects/neonwave',
    },
    {
      id: 3,
      img: 'https://picsum.photos/500/300',
      alt: 'cerebro digital',
      title: 'Cerebro Digital',
      role: 'Business Development',
      category: '#socialmedia #content #education',
      description: 'Collective learning community that promotes education through digital media content in the field of science and technology with more than 4 million Hispanic followers.',
      slug: 'projects/cerebrodigital',
    },
    {
      id: 4,
      img: 'https://picsum.photos/500/300',
      alt: 'devf',
      title: 'DEV.F',
      role: 'Community Lead & Sensei',
      category: '#software #education #bootcamp',
      description: 'Teaching people the most rewarded software and coding skills to hack the educational system and the job market in Latin America.',
      slug: 'projects/devf',
    },
    {
      id: 5,
      img: 'https://picsum.photos/500/300',
      alt: 'internet society México chapter',
      title: 'Internet Society México Chapter',
      role: 'Incorporated Member',
      category: '#tech #internet #development',
      description: 'Community networks, IoT development, and cybersecurity projects for an open, globally-connected, secure, and trustworthy Internet for everyone.',
      slug: 'projects/internetsociety',
    },
    {
      id: 6,
      img: 'https://picsum.photos/500/300',
      alt: 'global shapers Cancún hub',
      title: 'Global Shapers Cancún Hub',
      role: 'Vicecurator & Co-Founder',
      category: '#social #youth #community',
      description: 'Born out of the World Economic Forum, the Global Shapers Community is a worlwide network of young people driving dialogue, action and change.',
      slug: 'projects/globalshapers',
    },
    {
      id: 7,
      img: 'https://picsum.photos/500/300',
      alt: 'tech garage',
      title: 'Tech Garage Cancún',
      role: 'Former Innovation Manager',
      category: '#tech #startups #entrepreneurship',
      description: 'Technology Park in Cancún with software, innovation and knowledge-based environment that seeks to boost the creative and tech industry in the state of Quintana Roo.',
      slug: 'projects/techgarage',
    },
  ]

  return (
    <>
      <Header title="Projects" description="Projects in which I have put my passion on and in which I am or was mainly involved." />
      <Container>
      {
        projectsArray.map(el => {
          return <Row key={ el.id } className="mb-5">
              <Col md="6" sm="12">
                <Media className="px-3 mb-3">
                  <Media object src={ el.img } alt={ el.alt } className="img-fluid" />
                </Media>
              </Col>
              <Col md="6" sm="12">
                <Media body className="px-3">
                  <Media heading className="h3 font-weight-bold">
                    { el.title }
                  </Media>
                  <Media className="h5 font-weight-bold ">
                    { el.role }
                  </Media>
                  <Media className="h6 font-italic">
                    { el.category }
                  </Media>
                  { el.description }
                  <div className="my-3">
                    <Button color="dark">
                      <Link className="text-light" to={ el.slug }>See more</Link>
                    </Button>
                  </div>
                </Media>
              </Col>
            </Row>
        })
      }
      </Container>
    </>
  );
};

export default Projects;
