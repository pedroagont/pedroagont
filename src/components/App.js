import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import '../styles/App.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">pedroagont</Link>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/experience">Experience</Link>
        </li>
        <li>
          <Link to="/education">Education</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/dev">Dev</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

function Header({ title, description }) {
  return (
    <header className="header">
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
}

function Home() {
  return (
    <>
      <Header title="Home" description="Welcome" />
    </>
  );
}

function About() {
  return (
    <>
      <Header title="About" description="A little bit about me" />
      <main>
        <p>
          Im a mechatronics engineer and lifelong enthusiast of technology. I
          passionate educator of software development and innovation projects
          around the world.
          <br /> <br />
          I have also cofounded a nonprofit organization to help rural
          communities with Internet access and educational technology, as well
          as a youth empowerment initiative to promote citizenship and social
          impact. <br /> <br />
          During my spare time I love to play chess, to skydive and to tell as
          many bad jokes as I can. Pedro A. González is a Mechatronics Engineer
          and lifelong enthusiast of technology, digital development and social
          innovation entrepreneurship, who has participated as organizer, host,
          workshop facilitator, lecturer and exhibitor in more than 200 science,
          education and tech related activities between Los Angeles, Boston, New
          York, Toronto, Argentina and all over México, which features being
          invited as speaker to the Harvard Business School, the MIT Media Lab,
          and the UN Head Quarters, as well as other international meetings.
        </p>
      </main>
    </>
  );
}

function Experience() {
  const data = [
    {
      id: 1,
      company: 'University of Guelph',
      position: 'Web Development Instructor',
      description:
        'Deliver Full Stack Development and Software Engineering topics',
      location: 'Ontario, CA / Remote',
      url: 'http://example.com',
    },
    {
      id: 2,
      company: 'Lighthouse Labs Inc',
      position: 'Web Development Instructor',
      description:
        'Deliver Full Stack Development and Software Engineering topics',
      location: 'Vancouver, CA / Remote',
      url: 'http://example.com',
    },
    {
      id: 3,
      company: 'DEV.F',
      position: 'Web Development Instructor',
      description:
        'Deliver Full Stack Development and Software Engineering topics',
      location: 'Cancún, MX / Remote',
      url: 'http://example.com',
    },
    {
      id: 4,
      company: 'Internet Society',
      position: 'Web Development Instructor',
      description:
        'Deliver Full Stack Development and Software Engineering topics',
      location: 'Mexico City, MX / Remote',
      url: 'http://example.com',
    },
    {
      id: 5,
      company: 'Tech Garage',
      position: 'Innovation Manager',
      description:
        'Deliver Full Stack Development and Software Engineering topics',
      location: 'Cancún, MX',
      url: 'http://example.com',
    },
    {
      id: 6,
      company: 'Microsoft Innovation Center',
      position: 'Web Development Instructor',
      description:
        'Deliver Full Stack Development and Software Engineering topics',
      location: 'Cancún, MX',
      url: 'http://example.com',
    },
  ];

  return (
    <>
      <Header
        title="Experience"
        description="Companies that have trusted my work"
      />
      <main className="experience">
        <ul className="experience-list">
          {data.map((e) => (
            <li key={e.id} className="experience-list-item">
              <h3>
                {e.company}{' '}
                <span className="experience-list-item-location">
                  {e.location}
                </span>
              </h3>
              <p>{e.position}</p>
              <p>{e.description}</p>
              <a href={e.url}>{e.url}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function Education() {
  const data = [
    {
      id: 1,
      name: 'MIRAI Innovation',
      description: 'Emergent Future Technologies',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 2,
      name: 'DEV.F',
      description: 'Master in Coding',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 3,
      name: 'TecniA Technology Park',
      description: 'High Impact Entrepreneurship',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 4,
      name: 'National Technological Institute of Mexico',
      description: 'Mechatronics Engineering',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
  ];

  return (
    <>
      <Header title="Education" description="Educational timeline" />
      <main className="education">
        <ul className="education-list">
          {data.map((e) => (
            <li key={e.id} className="education-list-item">
              <h3>{e.company}</h3>
              <h3>{e.location}</h3>
              <p>{e.description}</p>
              <a href={e.url}>{e.url}</a>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function ProjectsListItem({ name, description, url, image }) {
  return (
    <li className="projects-list-item">
      <img src={image} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={url}>{url}</a>
      </div>
    </li>
  );
}

function Projects() {
  const data = [
    {
      id: 1,
      name: 'Kaanbal',
      description: 'An AI platform',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 2,
      name: 'Global Shapers Cancun Hub',
      description: 'An AI platform',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 3,
      name: 'Neonwave',
      description: 'An AI platform',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 4,
      name: 'Turepa.mx',
      description: 'An AI platform',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 5,
      name: 'Cerebro Digital',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 6,
      name: 'Singulary.ai',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 7,
      name: 'TicketFlyers.com',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 8,
      name: 'Bouncing Bob',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
  ];

  return (
    <>
      <Header title="Projects" description="Some projects I've worked around" />
      <main className="projects">
        <ul className="projects-list">
          {data.map((p) => (
            <ProjectsListItem key={p.id} {...p} />
          ))}
        </ul>
      </main>
    </>
  );
}

function DevListItem({ name, description, url, image }) {
  return (
    <li className="dev-list-item">
      <img src={image} />
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <a href={url}>{url}</a>
      </div>
    </li>
  );
}

function Dev() {
  const data = [
    {
      id: 1,
      name: 'Herbiview',
      description: 'An AI platform',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 2,
      name: 'Shopify Tech Assesment',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 3,
      name: 'Pokemon Matching Game',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 4,
      name: 'Women Violencemeter',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 5,
      name: 'Studeecloud',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 6,
      name: 'The Shoebox',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 7,
      name: 'SmartArt',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 8,
      name: 'Raspberry Pi + Robotics',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 9,
      name: 'React + Giphy SDK',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 10,
      name: 'React + ThreeJS',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 11,
      name: 'React + Bootstrap',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 12,
      name: 'VanillaJS Avatar Maker',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 13,
      name: 'VanillaJS NASA Image Searcher',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
    {
      id: 14,
      name: 'VanillaJS Color Flicker',
      description: 'A simple tap game',
      url: 'http://example.com',
      image: 'https://picsum.photos/300/200',
    },
  ];

  return (
    <>
      <Header
        title="Dev"
        description="Software development, coding and engineering stuff"
      />
      <main className="dev">
        <ul className="dev-list">
          {data.map((d) => (
            <DevListItem key={d.id} {...d} />
          ))}
        </ul>
      </main>
    </>
  );
}

function Contact() {
  return (
    <>
      <Header
        title="Contact"
        description="Feel free to reach if I can help in any way"
      />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/dev" element={<Dev />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
