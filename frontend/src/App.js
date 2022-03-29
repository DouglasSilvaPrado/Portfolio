import React from 'react'
import { Switch, Route } from 'react-router-dom'


// pages
import Home from './components/pages/Home/Home';
import Project from './components/pages/Project/Project';
import Projects from './components/pages/Projects/Projects';
import Navbar from './components/layout/Navbar/Navbar';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/project/:projectId" component={Project} />
      </Switch>
      
    </>
  );
}

export default App;
