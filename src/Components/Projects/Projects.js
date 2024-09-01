import React, { useState } from "react";
import Container from "../Common/Container";

function Projects() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Project 1",
      title: "🚀 Exploring Docker on AWS: From Manual Deployment to Full Automation with Terraform",
      description: "I recently achieved a milestone in my cloud computing journey by deploying Docker containers on AWS EC2 instances and automating the entire process with Terraform. This project involved manually setting up Docker on EC2, followed by automating the deployment and infrastructure setup using Terraform scripts. The result is a consistent, scalable, and efficient deployment process, highlighting the power of Infrastructure as Code."
    },
    {
      id: 2,
      name: "Project 2",
      title: "🚀 Deploying a React Js Application on AWS EC2",
      description: "To deploy a project on AWS, first clone the repository and set up the project locally with npm install and npm run start. Then, create and configure an EC2 instance on AWS, connect via SSH, and install necessary tools. Finally, clone the project on the EC2 instance, configure an Elastic IP, and start the project, adjusting security group rules to allow traffic."
    },
    {
      id: 3,
      name: "Project 3",
      title: "🚀 Containerized Portfolio Website Deployment on AWS EC2",
      description: "I successfully deployed a containerized portfolio website on AWS EC2 by first setting up an EC2 instance and installing Docker. The Docker container was configured to run the portfolio website, ensuring it could be accessed via the assigned Elastic IP. This setup provides a scalable and isolated environment for hosting the site, with the flexibility to easily manage and update the container."
    },
    {
      id: 4,
      name: "Project 4",
      title: "🚀 Terraform: Simplifying AWS Infrastructure and Application Deployment",
      description: "I leveraged Terraform to simplify AWS infrastructure and application deployment by automating the creation and management of resources. This approach enabled consistent and repeatable setups, including automated provisioning of EC2 instances and deployment configurations, streamlining the overall process and enhancing scalability and efficiency."
    },
    {
      id: 5,
      name: "Project 5",
      title: "🚀 Building a Dynamic Portfolio Website with React.js",
      description: "Create a modern, dynamic portfolio website using React.js to showcase your projects and skills. This project involves setting up a React application, designing a responsive layout, and integrating interactive elements. You'll learn to use React components, manage state, and apply styling with CSS or frameworks like Tailwind CSS. Enhance the functionality with features such as a contact form, project galleries, and smooth navigation to build a professional online presence."
    },
    {
      id: 6,
      name: "Project 6",
      title: "🚀 Deployment of Java Artifacts on AWS EC2 Using Terraform",
      description: "Deploy Java artifacts to AWS EC2 instances by automating the infrastructure setup with Terraform. This project involves defining the necessary EC2 resources and configurations as code, ensuring consistent and repeatable deployments. The process includes provisioning EC2 instances, configuring them for Java applications, and automating the deployment of Java artifacts, resulting in an efficient, scalable, and manageable deployment pipeline."
    }
  ];

  const handlePrevious = () => {
    setActiveProject((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveProject((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <Container>
      <section id="projects">
        <div className="w-full py-16 bg-primary dark:bg-themeBlack sm:flex sm:flex-col sm:justify-center sm:items-center">
          <div className="container mx-auto px-8 dark:text-black sm:dark:text-white">
            <h1 className="text-6xl font-semibold font-poppins text-center mb-12 dark:text-white">
              <span>My Projects</span>
            </h1>
            <div className="flex flex-col items-center gap-8 font-poppins">
              <div className="bg-white sm:dark:text-black shadow-xl rounded-xl p-4 flex-grow h-auto w-[20rem] lg:h-[25rem] lg:w-[70%] flex flex-col justify-center">
                <h3 className="text-xl lg:text-5xl font-bold mb-5 text-center">
                  {projects[activeProject].title}
                </h3>
                <p className="text-center">
                  {projects[activeProject].description}
                </p>
              </div>
              <div className="flex justify-between w-full max-w-xs mt-8 gap-4 sm:gap-8">
                <button
                  className="bg-secondary text-white py-2 px-6 rounded-lg transform transition-all hover:scale-105 hover:bg-secondary-dark"
                  onClick={handlePrevious}
                >
                  Previous
                </button>
                <button
                  className="bg-secondary text-white py-2 px-6 rounded-lg transform transition-all hover:scale-105 hover:bg-secondary-dark"
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Projects;
