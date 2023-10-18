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
          <Link to="/projects">Projects</Link>
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
    </>
  );
}

function Projects() {
  return (
    <>
      <Header title="Projects" description="Some projects I've worked around" />
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
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
