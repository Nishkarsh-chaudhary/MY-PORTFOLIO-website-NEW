import React, { useEffect, useState } from 'react';
import "../Navbar/Navbar.css"
import ThemeToggle from '../themetoggle/ThemeToggle';
import Container from '../Common/Container';
import { Link } from 'react-scroll';
import Logo from '../assets/Images/logo.png'

function Navbar() {

  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'projects', 'experience', 'skills', 'contact'];
      let currentSection = '';

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to set the initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <Container>
    <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md z-50 p-5 flex justify-between items-center">
      <div className="text-2xl font-bold hover cursor-pointer">
      <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}>
            <img src={Logo} alt="Logo" className="h-16 w-auto" /> {/* Adjust height and width as needed */}
          </Link>
        </div>

      <ul className="flex space-x-6 font-bold">

       <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>About</Link>

       <Link activeClass='active' to='experience' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Experience</Link>

        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Projects</Link>

        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Skills</Link>

        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500}  className='desktopMenuListItem'>Contact</Link>

      </ul>

      <ThemeToggle />
    </nav>
    </Container>
  );
}

export default Navbar;