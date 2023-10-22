import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="home-img">
        <img src="/assets/images/home.jpg" alt="pedroagont" />
      </div>
      <header className="header-home">
        <h1>Pedro A. González</h1>
        <h2>Innovator</h2>
      </header>
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
