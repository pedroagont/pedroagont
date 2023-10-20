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
      <main className="container">
        <p>
          Pedro A. González is a tech professional with a track record of making
          technology accessible and impactful, supported by a solid educational
          background and a commitment to knowledge sharing and innovation.
        </p>
      </main>
    </>
  );
}

function About() {
  return (
    <>
      <Header title="About" description="A little bit about me" />
      <main className="container">
        <p>
          Pedro A. González is a lifelong enthusiast of digital development and
          innovation with the mission of making technology accesible and
          impactful.
          <br /> <br />
          He is the co-founder of Kaanbal.org, a non profit organization focused
          on connecting remote communities with Internet access and tech-driven
          education.
          <br /> <br />
          His journey as an educator and tech entrepreneur have contributed a
          significantly into bridging the knowledge and digital divide,
          positively impacting the lives of thousands.
          <br /> <br />
          With a background in Mechatronics Engineering, a Master in Software
          Development and a specialization in Future Tech, Mr. González is a
          high end professional in the field of technology.
          <br /> <br />
          His passion on the topic has led Mr. González to participate as an
          international guest speaker, lecturer and presenter in dozens of
          events around Canada, United States, Mexico, Argentina, Germany and
          Japan, which features invitations from prestigious institutions such
          as Harvard, the MIT Media Lab and the United Nations.
          <br /> <br />
          Beyond his professional life, he loves playing chess, skydiving and to
          travel around the world as a digital nomad.
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
      position: 'Software Programming Instructor',
      location: 'Ontario, CA / Remote',
      fromTo: '2023 - Actual',
      url: 'https://www.uoguelph.ca',
    },
    {
      id: 2,
      company: 'Lighthouse Labs Inc',
      position:
        'Software Development Instructor, Mentor, Tech Interviewer, Project Evaluator',
      location: 'Vancouver, CA / Remote',
      fromTo: '2021 - Actual',
      url: 'https://www.lighthouselabs.ca',
    },
    {
      id: 3,
      company: 'DEV.F',
      position: 'Community Lead, Full Stack Development Instructor',
      location: 'Cancun, MX / Remote',
      fromTo: '2018 - 2021',
      url: 'https://new.devf.la/en',
    },
    {
      id: 4,
      company: 'Internet Society',
      position: 'Community Networks, Internet of Things Program Coordinator',
      location: 'Mexico City, MX / Remote',
      fromTo: '2017 - 2020',
      url: 'https://www.internetsociety.org',
    },
    {
      id: 5,
      company: 'Tech Garage Technology Park',
      position: 'Innovation Program Manager',
      location: 'Cancun, MX',
      fromTo: '2016 - 2018',
      url: 'https://www.facebook.com/techgaragemx',
    },
    {
      id: 6,
      company: 'Microsoft Innovation Center',
      position: 'Community Lead',
      location: 'Cancun, MX',
      fromTo: '2015 - 2016',
      url: 'https://www.microsoft.com/en-us/mtc',
    },
    {
      id: 7,
      company:
        'Mexican Chamber of Electronics, Telecommunications and Information Technologies (CANIETI)',
      position: 'Events Coordinator',
      location: 'Cancun, MX',
      fromTo: '2015 - 2016',
      url: 'http://www.canieti.org/Inicio/English/englishcan/about.aspx',
    },
  ];

  return (
    <>
      <Header
        title="Experience"
        description="Companies that have trusted my work"
      />
      <main className="container">
        <ul className="experience-list">
          {data.map((e) => (
            <li key={e.id} className="experience-list-item">
              <h3>
                {e.company}
                <div>
                  <span>{e.location}</span>
                  <span> | </span>
                  <span>{e.fromTo}</span>
                </div>{' '}
              </h3>
              <p>{e.position}</p>
              <a href={e.url}>More information</a>
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
      institution: 'MIRAI Innovation',
      achievement:
        'Emergent Future Technologies Certificate (Neurotech, Biomedics, IoT, Data Science, AI/ML, AR/VR)',
      location: 'Osaka, JP',
      fromTo: '2023',
      url: 'http://example.com',
    },
    {
      id: 2,
      institution: 'DEV.F',
      achievement:
        'Master in Coding (Fullstack Development Javascript, Git, React, Express, MongoDB, Postgresql)',
      location: 'Mexico City, MX',
      fromTo: '2018 - 2019',
      url: 'http://example.com',
    },
    {
      id: 3,
      institution: 'TecniA Technology Park',
      achievement:
        'High Impact Entrepreneurship Certificate (Startup ecosystem, Agile methodology, Intellectual Property)',
      location: 'Merida, MX',
      fromTo: '2015 - 2016',
      url: 'http://example.com',
    },
    {
      id: 4,
      institution: 'National Technological Institute of Mexico',
      achievement:
        'B.S. in Mechatronics Engineering (Mechanics, Electronics, Software, Control Engineering)',
      location: 'Cancun, MX',
      fromTo: '2011 - 2016',
      url: 'http://example.com',
    },
  ];

  return (
    <>
      <Header title="Education" description="Educational timeline" />
      <main className="container">
        <ul className="education-list">
          {data.map((e) => (
            <li key={e.id} className="education-list-item">
              <h3>
                {e.institution}
                <div>
                  <span>{e.location}</span>
                  <span> | </span>
                  <span>{e.fromTo}</span>
                </div>{' '}
              </h3>
              <p>{e.achievement}</p>
              <a href={e.url}>More information</a>
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
      <img src={image} alt={image} />
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
      <main className="container">
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
      <img src={image} alt={image} />
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
      <main className="container">
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
