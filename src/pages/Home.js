import { Link } from 'react-router-dom';
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <>
      <header className="header">
        <h1>Pedro A. González</h1>
        <h2>
          <Typewriter
            options={{
              strings: [
                'Tech Entrepreneur',
                'Software Developer',
                'Innovator',
                'Mechatronics Engineer',
                'Digital Nomad',
                'Skydiver',
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
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
