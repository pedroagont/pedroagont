import React from 'react';
import { Button, Container, Media } from 'reactstrap';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const Projects = (props) => {
  const projectsArray = [
    {
      id: 1,
      img: 'https://picsum.photos/500/300',
      title: 'CANIETI',
      category: 'tech, social',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      slug: 'projects/canieti',
    },
    {
      id: 2,
      img: 'https://picsum.photos/500/300',
      title: 'Acustik',
      category: 'tech, social',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      slug: 'projects/acustik',
    },
    {
      id: 3,
      img: 'https://picsum.photos/500/300',
      title: 'Incuvita',
      category: 'tech, social',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      slug: 'projects/incuvita',
    }
  ]

  return (
    <>
      <Header title="Projects" description="This is a modified jumbotron that occupies the entire horizontal space of its parent." />
      <Container>
      {
        projectsArray.map(el => {
          return <Media key={ el.id } className="mb-5">
            <Media left className="px-3">
              <Media object src={ el.img } alt={ el.alt } />
            </Media>
            <Media body>
              <Media heading>
                Media heading
              </Media>
              { el.description }
              <div className="my-3">
                <Button color="dark">
                  <Link className="text-light" to={ el.slug }>See more</Link>
                </Button>
              </div>
            </Media>
          </Media>
        })
      }
      </Container>
    </>
  );
};

export default Projects;
