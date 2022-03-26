import React from 'react'
import { Switch, Route } from 'react-router-dom'


// pages
import Home from './components/pages/Home/Home';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/courses" component={PageCourses} />
        <Route exact path="/about" component={PageAbout} />
        <Route exact path="/contact" component={PageContact} />
        <Route path="/course/:courseId" component={Courses} /> */}
      </Switch>
      
    </>
  );
}

export default App;
