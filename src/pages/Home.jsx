import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import WhyHireMe from '../components/WhyHireMe.jsx';
import Projects from '../components/Projects.jsx';
import Experience from '../components/Experience.jsx';
import Education from '../components/Education.jsx';
import Resume from '../components/Resume.jsx';
import Contact from '../components/Contact.jsx';
import FinalCTA from '../components/FinalCTA.jsx';

export default function Home() {
    const location = useLocation();

    useEffect(() => {
        const sectionFromHash = location.hash?.replace('#', '');
        const sectionFromState = location.state?.scrollTo;
        const sectionId = sectionFromState || sectionFromHash;

        if (sectionId) {
            setTimeout(() => {
                document
                    .getElementById(sectionId)
                    ?.scrollIntoView({ behavior: 'smooth' });
            }, 120);
        }
    }, [location]);

    return (
        <>
            <Hero />
            <About />
            <Skills />
            <WhyHireMe />
            <Projects />
            <Experience />
            <Education />
            <Resume />
            <Contact />
            <FinalCTA />
        </>
    );
}