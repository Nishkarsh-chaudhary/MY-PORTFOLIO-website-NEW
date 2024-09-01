import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';
import Card from '../Common/Card';
import { skills } from '../../Data/skillsData';

const Skills = () => {
  const [activeIndices, setActiveIndices] = useState(skills.map((_, index) => index));
  const [resetAnimation, setResetAnimation] = useState(false);
  const [showMore, setShowMore] = useState(false); // State to manage the view more button

  useEffect(() => {
    const interval = setInterval(() => {
      setResetAnimation(true);
      setActiveIndices((prevIndices) =>
        prevIndices.map((index) => (index + 1) % skills.length)
      );
      setTimeout(() => setResetAnimation(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    hidden: { opacity: 0 },
  };

  const cardVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.5, type: 'spring', stiffness: 100 },
    },
    hidden: { 
      opacity: 0, 
      scale: 0.8, 
      rotateY: 90 
    },
  };

  return (
    <Container>
      <motion.div
        className="flex flex-col items-center justify-center bg-primary p-[20px] dark:bg-themeBlack"
        id="skills"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-8 dark:text-white">
          <h1 className="text-4xl lg:text-6xl font-semibold font-Poppins text-center mb-12">
            My Skills
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {activeIndices.slice(0, showMore ? skills.length : 4).map((activeIndex, index) => (
            <motion.div
              key={index}
              className="w-full bg-white p-5 rounded-xl shadow-md text-center dark:text-black flex items-center justify-center"
              variants={cardVariants}
              initial="hidden"
              animate={resetAnimation ? "hidden" : "visible"}
              onAnimationComplete={() => setResetAnimation(false)}
            >
              <Card image={skills[activeIndex].image} />
            </motion.div>
          ))}
        </div>
        {!showMore && (
          <button
            className="mt-4 py-2 px-4 bg-secondary text-white text-2xl rounded hover:bg-blue-600 focus:outline-none"
            onClick={() => setShowMore(true)}
          >
            View More
          </button>
        )}
      </motion.div>
    </Container>
  );
};

export default Skills;
