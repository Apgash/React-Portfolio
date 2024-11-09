// Importing React library
import React from 'react';
// Importing Navigation component
import Navigation from './Navigation';

// Defining the Header functional component
function Header() {
  return (
    // Returning a header element
    <header>
      {/* Displaying my name */}
      <h1>Ashton Gardner's Portfolio</h1>
      {/* Including the Navigation component */}
      <Navigation />
    </header>
  );
}

// Exporting the Header component as the default export
export default Header;
