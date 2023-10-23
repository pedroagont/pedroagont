import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import useDocumentTitle from '../hooks/useDocumentTitle';

function Home({ data }) {
  useDocumentTitle(data.title);

  return (
    <>
      <header className="header">
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
