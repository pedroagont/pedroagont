import React from 'react';
import { Container, Media } from 'reactstrap';
import Header from '../components/Header';

const Press = (props) => {
  return (
    <>
      <Header title="Press" description="This is a modified jumbotron that occupies the entire horizontal space of its parent." />
      <Container>
        <Media>
          <Media left top href="#">
            <Media object src="https://picsum.photos/150/150" alt="Generic placeholder image" className="px-3" />
          </Media>
          <Media body>
            <Media heading>
              Top aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mt-3">
          <Media left middle href="#">
            <Media object src="https://picsum.photos/150/150" alt="Generic placeholder image" className="px-3" />
          </Media>
          <Media body>
            <Media heading>
              Middle aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
        <Media className="mt-3">
          <Media left bottom href="#">
            <Media object src="https://picsum.photos/150/150" alt="Generic placeholder image" className="px-3" />
          </Media>
          <Media body>
            <Media heading>
              Bottom aligned media
            </Media>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </Container>
    </>
  );
};

export default Press;
