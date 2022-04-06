import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './components/pages/Home/Home';
import Project from './components/pages/Project/Project';
import Projects from './components/pages/Projects/Projects';
import Navbar from './components/layout/Navbar/Navbar';
import About from './components/pages/About/About';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import Login from './components/pages/Login/Login';
import ListProject from './components/Admin/ListProject/ListProject';
import PagesProjectsForm from './components/Admin/PagesProjectsForm/PagesProjectsForm';

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
        <Route path="/admin" component={Login} />
        <Route path="/listProject" component={ListProject} />
        <Route path="/newProject" component={PagesProjectsForm} />
        <Route path="/editProject/:id" component={PagesProjectsForm} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
