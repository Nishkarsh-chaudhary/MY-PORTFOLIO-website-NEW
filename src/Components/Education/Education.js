import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const experiences = [
    {
      id: 1,
      title: "Bachelor Of Technology",
      company: "Dr APJ Abdul Kalam Technical University",
      location: 'Meerut',
      duration: "Sep 2021 - Present",
    },
    {
      id: 2,
      title: "Secondary School",
      company: "Dayawati Modi Academy",
      location: 'Meerut',
      duration: "2020 - 2021",
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
        className="flex flex-col items-center justify-center bg-primary p-[20px] dark:bg-themeBlack"
        id="experience"
        variants={containerVariants}
        initial="visible"
        animate="visible"
      >
        <div className="container mx-auto px-8 dark:text-white">
          <h1 className="text-2xl lg:text-6xl font-semibold font-poppins text-center mb-12">
            <span>My Education</span>
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4 font-poppins">
          <motion.div
            className="w-full lg:w-full bg-white p-5 mb-5 rounded-xl shadow-md text-center dark:text-black flex flex-col justify-center"
            style={{ minHeight: '250px' }}  // Set a minimum height for consistency
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
            className="w-full lg:w-full bg-white p-5 mb-5 rounded-xl shadow-md text-center dark:text-black flex flex-col justify-center"
            style={{ minHeight: '250px' }}  // Set the same minimum height
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

export default Education;
