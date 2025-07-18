import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect to add and remove scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than 50 pixels
      if (window.scrollY > 50) { 
        setScrolled(true); // Set scrolled state to true
      } else {
        setScrolled(false); // Set scrolled state to false
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    // Apply 'scrolled' class based on the state
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">SOCH STUDIO</div>
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#featured" onClick={() => setMenuOpen(false)}>Demo</a>
        <a href="#services" onClick={() => setMenuOpen(false)}>What We Do</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </nav>
  );
}
