// Importing React library
import React from 'react';

function Resume() {
  // Array of proficiencies
  const proficiencies = [
    'JavaScript',
    'React',
    'HTML',
    'CSS',
    'Node.js',
    'Express.js',
    'SQL',
    'Git/GitHub',
  ];

  return (
    // Returning a section element containing the resume details
    <section>
      {/* Displaying the section title */}
      <h2>Resume</h2>
      {/* Link to download the resume */}
      <p>
        Download my <a href="/path/to/resume.pdf" download>Resume</a>
      </p>
      {/* Displaying the proficiencies title */}
      <h3>Proficiencies</h3>
      {/* Listing the proficiencies */}
      <ul>
        {proficiencies.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

// Exporting the Resume component as the default export
export default Resume;