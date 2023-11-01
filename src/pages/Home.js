import { Link, useLocation } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import useDocumentMetaTags from '../hooks/useDocumentMetaTags';

function Home({ data }) {
  const location = useLocation();
  useDocumentMetaTags(data.title, location.pathname);

  return (
    <>
      <header
        className="header"
        style={{ backgroundImage: `url(${data.backgroundImg})` }}
      >
        <h1>{data.title}</h1>
        <h2>
          <Typewriter
            options={{
              strings: data.description,
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </header>
      <main className="container">
        <p>{data.content}</p>
        <div className="home-cta">
          <Link to="/about">See more</Link>
        </div>
      </main>
    </>
  );
}

export default Home;
