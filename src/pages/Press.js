import React from 'react';
import { Container, Media } from 'reactstrap';
import Header from '../components/Header';

const Press = (props) => {
  const pressArray = [
    {
      id: 1,
      src: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      brand: 'United Nations',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://google.com',
    },
    {
      id: 2,
      src: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      brand: 'United Nations',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://google.com',
    },
    {
      id: 3,
      src: 'https://picsum.photos/150/150',
      alt: 'Cool stuff',
      brand: 'United Nations',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      url: 'https://google.com',
    },
  ]

  return (
    <>
      <Header title="Press" description="This is a modified jumbotron that occupies the entire horizontal space of its parent." />
      <Container>
        {
          pressArray.map(el => {
            return <Media className="mb-5">
                     <Media left href={ el.url }>
                       <Media object src={ el.src } alt={ el.alt } className="px-3" />
                     </Media>
                     <Media body>
                       <Media heading>
                         { el.brand }
                       </Media>
                       { el.description }
                     </Media>
                   </Media>
          })
        }
      </Container>
    </>
  );
};

export default Press;
