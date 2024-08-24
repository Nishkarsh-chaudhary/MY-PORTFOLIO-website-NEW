import React, { useState , useEffect } from "react";
import Container from "../Common/Container";

function Projects() {
  const [activeProject, setActiveProject] = useState(1);

  const projects = [
    {   id: 1, 
        name:"Project 1", 
        title: "🚀 Exploring Docker on AWS: From Manual Deployment to Full Automation with Terraform", 
        description: "I recently achieved a milestone in my cloud computing journey by deploying Docker containers on AWS EC2 instances and automating the entire process with Terraform. This project involved manually setting up Docker on EC2, followed by automating the deployment and infrastructure setup using Terraform scripts. The result is a consistent, scalable, and efficient deployment process, highlighting the power of Infrastructure as Code." 
    },
    {   id: 2, 
        name:"Project 2", 
        title: "🚀 Deploying a React Js Application on AWS EC2", 
        description: "To deploy a project on AWS, first clone the repository and set up the project locally with npm install and npm run start. Then, create and configure an EC2 instance on AWS, connect via SSH, and install necessary tools. Finally, clone the project on the EC2 instance, configure an Elastic IP, and start the project, adjusting security group rules to allow traffic." 
    },
    {   id: 3, 
        name:"Project 3", 
        title: "🚀 Containerized Portfolio Website Deployment on AWS EC2", 
        description: "I successfully deployed a containerized portfolio website on AWS EC2 by first setting up an EC2 instance and installing Docker. The Docker container was configured to run the portfolio website, ensuring it could be accessed via the assigned Elastic IP. This setup provides a scalable and isolated environment for hosting the site, with the flexibility to easily manage and update the container."
                             
    },
    {   id: 4, 
        name:"Project 4", 
        title: "🚀 Terraform: Simplifying AWS Infrastructure and Application Deployment", 
        description: "I leveraged Terraform to simplify AWS infrastructure and application deployment by automating the creation and management of resources. This approach enabled consistent and repeatable setups, including automated provisioning of EC2 instances and deployment configurations, streamlining the overall process and enhancing scalability and efficiency." 
    },
    {   id: 5, 
        name:"Project 5", 
        title: "🚀 Building a Dynamic Portfolio Website with React.js", 
        description: "Create a modern, dynamic portfolio website using React.js to showcase your projects and skills. This project involves setting up a React application, designing a responsive layout, and integrating interactive elements. You'll learn to use React components, manage state, and apply styling with CSS or frameworks like Tailwind CSS. Enhance the functionality with features such as a contact form, project galleries, and smooth navigation to build a professional online presence." 
    },
    {   id: 6, 
        name:"Project 6", 
        title: "🚀 Deployment of Java Artifacts on AWS EC2 Using Terraform", 
        description: "Deploy Java artifacts to AWS EC2 instances by automating the infrastructure setup with Terraform. This project involves defining the necessary EC2 resources and configurations as code, ensuring consistent and repeatable deployments. The process includes provisioning EC2 instances, configuring them for Java applications, and automating the deployment of Java artifacts, resulting in an efficient, scalable, and manageable deployment pipeline." 
    },

   
    // Add more projects as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prevIndex) => (prevIndex % projects.length) + 1);
    }, 7000); // 15 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [projects.length]);

  return (
    <Container>
    <section id="projects">
      <div className="w-full py-16 bg-primary dark:bg-themeBlack">
        <div className="container mx-auto px-8  dark:text-black">
          <h1 className="text-6xl font-semibold font-poppins text-center mb-12 dark:text-white ">
           <span>My Projects </span> 
          </h1>
          
          <div className="flex flex-col lg:flex-row items-start gap-8 font-poppins ">
            <ul className="flex flex-wrap  flex-row   rounded-lg lg:flex-col items-center space-x-4 lg:space-x-0 lg:space-y-4 flex-shrink-0 lg:bg-white lg:h-full lg:w-auto">
              {projects.map((project) => (
                <li
                  key={project.id}
                  className={`cursor-pointer ${
                    activeProject === project.id
                      ? "'text-secondary font-bold text-xl"
                      : "text-themePrimary-low"
                  }`}
                  onClick={() => setActiveProject(project.id)}
                >
                  {project.name}
                </li>
              ))}
            </ul>

            <div className="bg-white shadow-xl rounded-xl p-4 flex-grow h-full lg-h-80 w-full">
              <h3 className="text-xl lg:text-5xl font-bold font-Poppins mb-5 text-center">
                {projects.find((project) => project.id === activeProject)?.title}
              </h3>
              <p>
                {
                  projects.find((project) => project.id === activeProject)
                    ?.description
                }
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </Container>
  );
}

export default Projects;
