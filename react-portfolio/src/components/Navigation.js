// Importing React library
import React from 'react';
// Importing NavLink component from react-router-dom for navigation
import { NavLink } from 'react-router-dom';

// Defining the Navigation functional component
function Navigation() {
  return (
    // Returning a nav element containing navigation links
    <nav>
      {/* NavLink components for navigation to different routes */}
      <NavLink to="/">About Me</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/resume">Resume</NavLink>
    </nav>
  );
}

// Exporting the Navigation component as the default export
export default Navigation;