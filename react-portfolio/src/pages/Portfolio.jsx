// Importing React library
import React from 'react';
// Importing Project component
import Project from '../components/Project';

function Portfolio() {
  // Array of project objects containing details for each project
  const projects = [
    {
      title: 'Piano Player',
      image: 'src/assets/Screenshot 2024-11-09 125824.png',
      deployedUrl: 'https://apgash.github.io/Piano-Project/',
      githubUrl: 'https://github.com/Apgash/Piano-Project',
    },
    {
      title: 'Vehicle Builder',
      image: '/src/assets/Screenshot 2024-11-09 140022.png',
      deployedUrl: 'https://github.com/Apgash/Vehicle-Builder',
      githubUrl: 'https://github.com/Apgash/Vehicle-Builder',
    },
    {
      title: 'Employee Maker',
      image: '/src/assets/Screenshot 2024-11-09 140242.png',
      deployedUrl: 'https://github.com/Apgash/Employee-Maker',
      githubUrl: 'https://github.com/Apgash/Employee-Maker',
    },
    {
      title: 'ReadMe Generator',
      image: '/src/assets/Screenshot 2024-11-09 140519.png',
      deployedUrl: 'https://github.com/Apgash/Repository-Generator',
      githubUrl: 'https://github.com/Apgash/Repository-Generator',
    },
    // Additional projects can be added here
  ];

  return (
    // Returning a section element containing the list of projects
    <section>
      {/* Displaying the section title */}
      <h2>Portfolio</h2>
      {/* Mapping over the projects array to render Project components */}
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          deployedUrl={project.deployedUrl}
          githubUrl={project.githubUrl}
        />
      ))}
    </section>
  );
}

// Exporting the Portfolio component as the default export
export default Portfolio;