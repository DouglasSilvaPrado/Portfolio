import React from 'react'

import Navbar from '../../layout/Navbar/Navbar';
import Intro from '../../layout/Intro/Intro';
import Projects from '../../layout/Projects/Projects';

function Home() {
    return ( 
        <>
            <Navbar />
            <Intro />
            <Projects />
        </>
    );
}

export default Home;