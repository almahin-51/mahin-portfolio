import React from 'react';
import About from '../About/About';
import ContactMe from '../ContactMe/ContactMe';
import HomeBanner from '../HomeBanner/HomeBanner';
import Projects from '../Projects/Projects';

const Home = () => {


    return (
        <div className="main">
            <HomeBanner />
            <About />
            <Projects />
            <ContactMe />
        </div>
    );
};

export default Home;