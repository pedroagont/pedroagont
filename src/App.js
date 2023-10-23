import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigation from './components/Navigation';

import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Education from './pages/Education';
import Projects from './pages/Projects';
import Dev from './pages/Dev';
import Contact from './pages/Contact';

import './styles/App.css';

import data from './data';

function App() {
  return (
    <BrowserRouter>
      <Navigation data={data.navigationData} />
      <Routes>
        <Route path="/" element={<Home data={data.homeData} />} />
        <Route path="/about" element={<About data={data.aboutData} />} />
        <Route
          path="/experience"
          element={<Experience data={data.experienceData} />}
        />
        <Route
          path="/education"
          element={<Education data={data.educationData} />}
        />
        <Route
          path="/projects"
          element={<Projects data={data.projectsData} />}
        />
        <Route path="/dev" element={<Dev data={data.devData} />} />
        <Route path="/contact" element={<Contact data={data.contactData} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
