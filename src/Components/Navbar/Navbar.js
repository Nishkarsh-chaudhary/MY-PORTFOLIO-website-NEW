import React, { useEffect, useState } from 'react';
import "../Navbar/Navbar.css";
import ThemeToggle from '../themetoggle/ThemeToggle';
import Container from '../Common/Container';
import { Link } from 'react-scroll';
import Logo from '../assets/Images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Container>
      <nav className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-md z-50 p-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold hover cursor-pointer">
          <Link to='about' spy={true} smooth={true} offset={-100} duration={500}>
            <img src={Logo} alt="Logo" className="h-16 w-auto" /> {/* Adjust height and width as needed */}
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="sm:hidden lg:flex lg:space-x-6 lg:font-bold">
          <li><Link to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link></li>
          <li><Link to='experience' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Experience</Link></li>
          <li><Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Projects</Link></li>
          <li><Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Skills</Link></li>
          <li><Link to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Contact</Link></li>
        </ul>
        <ThemeToggle  />
        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 w-64 h-full  transform transition-transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-60`}>
          <div className="p-5 flex flex-col h-full justify-between">
            <div className="flex justify-end">
              <FaTimes size={24} className="cursor-pointer" onClick={toggleMobileMenu} />
            </div>
            <ul className="flex flex-col space-y-6 font-bold bg-white dark:text-black rounded-3xl p-4">
              <li><Link to='about' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={toggleMobileMenu}>About</Link></li>
              <li><Link to='experience' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={toggleMobileMenu}>Experience</Link></li>
              <li><Link to='projects' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={toggleMobileMenu}>Projects</Link></li>
              <li><Link to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={toggleMobileMenu}>Skills</Link></li>
              <li><Link to='contact' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={toggleMobileMenu}>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
