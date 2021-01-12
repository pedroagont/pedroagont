import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Collabs from './pages/Collabs';
import Gallery from './pages/Gallery';
import Press from './pages/Press';
import CV from './pages/CV';
import Contact from './pages/Contact';
import NotFound404 from './pages/NotFound404';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/projects/:id" component={Projects}/>
        <Route exact path="/collabs" component={Collabs}/>
        <Route exact path="/collabs/:id" component={Collabs}/>
        <Route exact path="/gallery" component={Gallery}/>
        <Route exact path="/press" component={Press}/>
        <Route exact path="/cv" component={CV}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/*" component={NotFound404}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
