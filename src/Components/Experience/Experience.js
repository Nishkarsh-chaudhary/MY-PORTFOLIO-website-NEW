import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Container from '../Common/Container';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);


  const experiences = [
    {
      id: 1,
      title: "Frontend Developer Internship",
      company: "At Voxturr",
      location:'on-site(Gurugram)',
      duration: "Nov 2023 - March 2024",
      description: "At Voxturr, I developed custom responsive designs, translating mock-ups into functional websites using HTML, CSS, JavaScript, ReactJS, Next.js, Tailwind CSS, and TypeScript. I focused on optimizing layouts for various devices, ensuring the websites met key objectives like load speed and design. My contributions helped create successful digital marketing solutions."
    },
    {
      id: 2,
      title: "Data Science Internship",
      company: "At Corizo",
      location:'Remote (Merrut)',
      duration: "June 2022 - Sept 2022",
      description: "At Corizo, I developed a predictive model to forecast future stock prices. The project involved comprehensive data collection, preprocessing, and the selection of an appropriate machine learning model."
    },
   
]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  useEffect(()=>{
    const intervel = setInterval(()=>{
        setActiveIndex((prevIndex)=>(prevIndex +1) % experiences.length);
    },[7000])

    return () => clearInterval(intervel);
  },[experiences.length]);

  const containerVariants = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  };

  const cardVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hidden: { opacity: 0, scale: 0.8 },
  };

  return (
    <Container>
    <motion.div
      className="flex flex-col items-center justify-center bg-primary p-[20px] dark:bg-themeBlack "
      id="experience"
      ref={sectionRef}
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? 'visible' : 'hidden'}
    >
       <div className="container mx-auto px-8  dark:text-white">
          <h1 className="text-6xl font-semibold font-poppins text-center mb-12 ">
           <span>My Experience </span> 
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row justify-center space-y-4 lg:space-y-0 lg:space-x-4  font-poppins">
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
            className="w-full lg:w-full bg-white p-5 mb-5 rounded-xl shadow-md text-center dark:text-black "
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
      {/* Repeat for more experiences */}
    </motion.div>
    </Container>
  );
};

export default Experience;
