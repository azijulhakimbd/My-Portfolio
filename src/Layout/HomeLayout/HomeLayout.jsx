import React from 'react';
import About from '../../Pages/Home/About/About';
import Banner from '../../Pages/Home/Banner/Banner';
import Skills from '../../Pages/Home/Skills/Skills';
import Projects from '../../Pages/Home/Projects/Projects';
import Contact from '../../Pages/Home/Contact/Contact';
import Stats from '../../Pages/Home/Stats/Stats';



const HomeLayout = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Stats></Stats>
            <Contact></Contact>
        </div>
    );
};

export default HomeLayout;