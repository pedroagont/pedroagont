import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Home() {
  return (
    <>
      <Header title="Home" description="Welcome" />
      <main className="container">
        <p>
          Pedro A. González is a mexican engineer and multi-faceted individual
          with a track record of making technology accessible and impactful. His
          visionary leadership has brought positive change through innovation,
          education, and an unwavering passion for technology.
        </p>
        <Link to="/about">See more</Link>
      </main>
    </>
  );
}

export default Home;
