import React from 'react'
import { Switch, Route } from 'react-router-dom'


// pages
import Home from './components/pages/Home/Home';
import Project from './components/pages/Project/Project';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        
        <Route path="/project/:projectId" component={Project} />
      </Switch>
      
    </>
  );
}

export default App;
