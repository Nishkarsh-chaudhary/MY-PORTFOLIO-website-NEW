import React, { useState, useEffect } from 'react';
import backgroundImage1 from '../assets/Videos/backgroundImage1.jpg';
import backgroundImage2 from '../assets/Videos/backgroundImage2.jpg';
import './About.css';

import Container from '../Common/Container';
import { Link } from 'react-scroll';

function About() {
  const [background, setBackground] = useState(backgroundImage1);
  const [paragraph, setParagraph] = useState('Efficient Front-End Developer Specializing in High-Performance Web Solutions.');

  const [animate, setAnimate] = useState(false);

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
    }, 6000);

    return () => clearInterval(interval);
  }, [background]);

  return (
    <Container>
      <section id="about" className="relative w-full h-[500px] pt-[5rem] lg:pt-16 about-section">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            filter: 'brightness(50%)',
          }}
        ></div>

        <div className="relative flex flex-col md:flex-row items-center justify-center w-full h-full px-4 py-6 bg-opacity-80 rounded-md shadow-lg mx-auto">
          <div className="text-center md:text-left mb-8 md:mb-0 text-white flex flex-col items-center md:items-start">
            <h1 className={`text-2xl sm:text-3xl lg:text-5xl font-semibold mb-4 font-oswald about-heading ${animate ? 'animate-slide-up' : ''}`}>
              I'M NISHKARSH CHAUDHARY
            </h1>
            <h5 className={`text-sm sm:text-lg lg:text-2xl font-poppins about-paragraph ${animate ? 'animate-slide-up' : ''}`}>
              {paragraph}
            </h5>
          </div>
          <div className="space-x-3 flex flex-col md:flex-row mt-6 md:mt-0">
            <button className="px-6 py-2 bg-blue text-white rounded font-oswald mb-2 md:mb-0">
              <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}>
                Hire Me
              </Link>
            </button>
            <button className="px-6 py-2 bg-gray-500 text-white rounded font-oswald">
              <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}>
                My Projects
              </Link>
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default About;
