// Importing React library
import React from 'react';

// Defining the AboutMe functional component
function AboutMe() {
  return (
    // Returning a section element
    <section>
      {/* Displaying the section title */}
      <h2>About Me</h2>
      {/* Displaying the developer's avatar */}
      <img src="\src\assets\Screenshot 2024-11-09 141710.png" alt="Developer avatar" />
      {/* Displaying a short bio */}
      <p>My name is Ashton Gardner and i'm currently an aspiring web developer. I have created this portfolio from scrath to show off and showcase my projects I have created so far!</p>
    </section>
  );
}

// Exporting the AboutMe component as the default export
export default AboutMe;
