import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../assets/Videos/backgroundImage1.jpg'; // Adjust the path as needed
import backgroundImage2 from '../assets/Videos/backgroundImage2.jpg';
import './About.css'

import Container from '../Common/Container';
import { Link } from 'react-scroll';



function About() {
  const [background, setBackground] = useState(backgroundImage1);
  const [paragraph, setParagraph] = useState('Efficient Front-End Developer Specializing in High-Performance Web Solutions.');

  const [animate, setAnimate] = useState(false);
  const [fade,] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (background === backgroundImage1) {
        setBackground(backgroundImage2);
        setParagraph('Efficient Front-End Developer Specializing in High-Performance Web Solutions.');
      } else {
        setBackground(backgroundImage1);
        setParagraph('An Efficient DevOps Engineer Enhancing Automation and Infrastructure');
      }


      setAnimate(true);
      setTimeout(() => setAnimate(false), 500); 
    }, 6000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [background]);

  return (
    <Container>
    <section id="about" className="relative w-full h-[500px] pt-[5rem] lg:pt-16 about-section">
      
    
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: '100%', // Ensure the image covers the container
        filter: 'brightness(50%)', // Darken the image
      }}
    ></div>

    <div className="relative flex flex-col md:flex-row justify-between items-center w-full h-full px-8 py-6 bg-opacity-80 rounded-md shadow-lg mx-auto">
      <div className="text-left mb-8 md:mb-0 text-white flex flex-col items-center md:items-start">
      <h1 className={`text-2xl  lg:text-5xl font-semibold mb-4 font-oswald about-heading ${animate ? 'animate-slide-up' : ''}`}>
            I'M NISHKARSH CHAUDHARY
          </h1>
      <h5 className={`text-2xl font-poppins about-paragraph ${animate ? 'animate-slide-up' : ''}`}>
            {paragraph}
      </h5>
      </div>
      <div className="space-x-3">
        <button className="px-6 py-2 bg-blue text-white rounded font-oswald">
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} >Hire Me</Link>
        </button>
        <button className="px-6 py-2 bg-gray-500 text-white rounded font-oswald">
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} >My Projects</Link>
        </button>
      </div>
    </div>
  </section>
  </Container>
);
  
}

export default About;
