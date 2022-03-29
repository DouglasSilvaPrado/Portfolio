import React from 'react'


import Intro from '../../layout/Intro/Intro';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';

function Home() {
    return ( 
        <>
            <Intro />
            <Projects/>
            <About />
            <Contact />
        </>
    );
}

export default Home;