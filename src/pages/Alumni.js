import React from 'react';
import { Col, Container, Media, Row } from 'reactstrap';
import Header from '../components/Header';

const Alumni = (props) => {
  const alumniArray = [
    {
      id: 1,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 2,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 3,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 4,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 5,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 6,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 7,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 8,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 9,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 10,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 11,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
    {
      id: 12,
      img: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      name: 'United Nations',
    },
  ]

  return (
    <>
      <Header title="Alumni" description="This is a modified jumbotron that occupies the entire horizontal space of its parent." />
      <Container>
        <Row>
          {
            alumniArray.map(el => {
              return <Col key={ el.id }>
                 <Media className="mb-3 justify-content-center">
                   <Media>
                     <Media object src={ el.img } alt={ el.alt } className="px-3 rounded-circle" />
                   </Media>
                 </Media>
                 <div className="mb-3 small text-center">
                 { el.name }
                 </div>
               </Col>
            })
          }
        </Row>
      </Container>
    </>
  );
};

export default Alumni;
