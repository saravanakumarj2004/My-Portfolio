import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import InfiniteMarquee from '../components/InfiniteMarquee';

const Home = () => {
    return (
        <main>
            <Hero />
            <InfiniteMarquee />
            <About />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;
