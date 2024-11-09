// Importing React library
import React from 'react';
// Importing Project component
import Project from '../components/Project';

function Portfolio() {
  // Array of project objects containing details for each project
  const projects = [
    {
      title: 'Project One',
      image: '/path/to/project1-image.jpg',
      deployedUrl: 'https://project1.com',
      githubUrl: 'https://github.com/username/project1',
    },
    {
      title: 'Project Two',
      image: '/path/to/project2-image.jpg',
      deployedUrl: 'https://project2.com',
      githubUrl: 'https://github.com/username/project2',
    },
    {
      title: 'Project Three',
      image: '/path/to/project3-image.jpg',
      deployedUrl: 'https://project3.com',
      githubUrl: 'https://github.com/username/project3',
    },
    {
      title: 'Project Four',
      image: '/path/to/project4-image.jpg',
      deployedUrl: 'https://project4.com',
      githubUrl: 'https://github.com/username/project4',
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