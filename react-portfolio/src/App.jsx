import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header.jsx';
import AboutMe from './pages/AboutMe.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Contact from './pages/Contact.jsx';
import Resume from './pages/Resume.jsx';
import Footer from './components/Footer.jsx';
import './App.css';

function App() {
  return (
      <div className="App">
        {/* Rendering the Header component */}
        <Header />
        {/* Defining routes for different pages */}
        <Routes>
          <Route path="/" element={<Navigate to="/about" />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        {/* Rendering the Footer component */}
        <Footer />
      </div>
  
  );
}

export default App;