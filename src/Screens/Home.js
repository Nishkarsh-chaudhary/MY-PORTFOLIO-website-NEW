import React from 'react'

import Navbar from '../Components/Navbar/Navbar'
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Experience from '../Components/Experience/Experience';
import Skills from '../Components/Skills/skills';
import ContactForm from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Foorter';

function Home() {
  return (
    <div>
        <Navbar />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <ContactForm />
        <Footer />
    </div>
  )
}

export default Home