// Importing React library
import React from 'react';

// Defining the Project functional component
// Destructuring props to extract title, image, deployedUrl, and githubUrl
function Project({ title, image, deployedUrl, githubUrl }) {
  return (
    // Returning a div element with class "project"
    <div className="project">
      {/* Displaying the project image */}
      <img src={image} alt={`${title} screenshot`} />
      {/* Displaying the project title */}
      <h3>{title}</h3>
      {/* Link to the deployed application */}
      <a href={deployedUrl} target="_blank" rel="noopener noreferrer">Deployed App</a>
      {/* Link to the GitHub repository */}
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
    </div>
  );
}

// Exporting the Project component as the default export
export default Project;