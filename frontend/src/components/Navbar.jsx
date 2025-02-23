import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">URL Shortener</a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">More</a>
      </div>
      {/* Contact button on the right */}
      <div className="navbar-contact">
        <a href="/contact" className="contact-btn">Contact</a>
      </div>
      {/* Updated toggle button with dynamic icon */}
      <div className="navbar-toggle" onClick={toggleMenu}>
        <span className="toggle-icon">
          {isMenuOpen ? '✕' : '&#9776;'}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;