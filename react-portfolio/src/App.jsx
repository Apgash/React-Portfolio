import React from 'react';
import Header from './components/Header.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Rendering the Header component */}
      <Header />
      {/* Rendering the AboutMe component */}
      <AboutMe />
      {/* Rendering the Portfolio component */}
      <Portfolio />
      {/* Rendering the Contact component */}
      <Contact />
      {/* Rendering the Footer component */}
      <Footer />
    </div>
  );
}

export default App;