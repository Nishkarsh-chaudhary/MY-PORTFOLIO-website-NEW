import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/Images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto w-full flex flex-col md:flex-row justify-between items-center p-4">
        {/* Left Side: Image */}
        <div className="flex items-center h-[5rem] w-auto mb-4 md:mb-0">
          <img
            src={Logo}
            alt="Footer Logo"
            className="h-full w-auto rounded-2xl"
          />
        </div>

        {/* Center: List */}
        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 font-bold cursor-pointer mb-4 md:mb-0">
          <li>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className="hover:text-yellow-400">
              Projects
            </Link>
          </li>
          <li>
            <Link to="experience" spy={true} smooth={true} offset={-100} duration={500} className="hover:text-yellow-400">
              Experience
            </Link>
          </li>
          <li>
            <Link to="skills" spy={true} smooth={true} offset={-100} duration={500} className="hover:text-yellow-400">
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>

        {/* Right Side: Social Media Links */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com/__.nishkarsh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nishkarsh-chaudhary-a08967225/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/__.nishkarsh/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
            <FaInstagram size={24} />
          </a>
        </div>
      </div>

      {/* Contact Details */}
      <div className="container mx-auto w-full flex flex-col md:flex-row justify-between items-center p-4 text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <p className="font-poppins text-gray-400">Email: <a href="mailto:nishkarshchaudhary51@gmail.com" className="hover:text-yellow-400">nishkarshchaudhary51@gmail.com</a></p>
          <p className="font-poppins text-gray-400">Phone: <a href="tel:+918077160965" className="hover:text-yellow-400">+91 8077160965</a></p>
          <p className="font-poppins text-gray-400">Address: Meerut, Uttar Pradesh, India</p>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="w-full flex justify-center items-center py-2 bg-gray-800">
        <p className="text-sm font-poppins text-center text-yellow-400">Thank you for the visit!</p>
      </div>

      {/* Copyright Section */}
      <div className="w-full flex justify-center items-center py-2 bg-gray-800">
        <p className="text-xs font-poppins text-center text-gray-400">© 2024 Nishkarsh Chaudhary</p>
      </div>
    </footer>
  );
};

export default Footer;
