import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Internship",
      company: "At Voxturr",
      location: 'on-site(Gurugram)',
      duration: "Nov 2023 - March 2024",
      description: "At Voxturr, I developed custom responsive designs, translating mock-ups into functional websites using HTML, CSS, JavaScript, ReactJS, Next.js, Tailwind CSS, and TypeScript. I focused on optimizing layouts for various devices, ensuring the websites met key objectives like load speed and design. My contributions helped create successful digital marketing solutions."
    },
    {
      id: 2,
      title: "Data Science Internship",
      company: "At Corizo",
      location: 'Remote (Meerut)',
      duration: "June 2022 - Sept 2022",
      description: "At Corizo, I developed a predictive model to forecast future stock prices. The project involved comprehensive data collection, preprocessing, and the selection of an appropriate machine learning model."
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % experiences.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [experiences.length]);

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Container>
      <motion.div
        className="flex flex-col items-center justify-center bg-primary p-[20px] dark:bg-themeBlack "
        id="experience"
        variants={containerVariants}
        initial="visible"  // Always set to "visible"
        animate="visible"  // Always animate to "visible"
      >
        <div className="container mx-auto px-8 dark:text-white">
          <h1 className="text-3xl lg:text-6xl font-semibold font-poppins text-center mb-12">
            <span>My Experience</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 font-poppins">
          <motion.div
            className="w-full lg:w-full bg-white p-5 mb-5 rounded-xl shadow-md text-center dark:text-black"
            variants={cardVariants}
            key={`${activeIndex}-1`}
          >
            <h2 className='text-xl lg:text-4xl font-bold'>{experiences[activeIndex].title}</h2>
            <p className='lg:text-2xl font-medium text-blue'>{experiences[activeIndex].company}</p>
            <p className='lg:text-xl'>{experiences[activeIndex].location}</p>
            <p className='font-small lg:text-[0.8rem] text-blue'>{experiences[activeIndex].duration}</p>
            <p className='text-secondary'>{experiences[activeIndex].description}</p>
          </motion.div>

          <motion.div
            className="w-full lg:w-full bg-white p-5 mb-5 rounded-xl shadow-md text-center dark:text-black"
            variants={cardVariants}
            key={`${(activeIndex + 1) % experiences.length}-2`}
          >
            <h2 className='text-xl lg:text-4xl font-bold'>{experiences[(activeIndex + 1) % experiences.length].title}</h2>
            <p className='lg:text-2xl font-medium text-blue'>{experiences[(activeIndex + 1) % experiences.length].company}</p>
            <p className='lg:text-xl'>{experiences[(activeIndex + 1) % experiences.length].location}</p>
            <p className='font-small lg:text-[0.8rem] text-blue'>{experiences[(activeIndex + 1) % experiences.length].duration}</p>
            <p className='text-secondary'>{experiences[(activeIndex + 1) % experiences.length].description}</p>
          </motion.div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Experience;
