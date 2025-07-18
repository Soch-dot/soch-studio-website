import React, { useEffect } from "react";
import "./App.css";
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Whether animation should happen only once - while scrolling down
      mirror: false,  // Whether elements should animate out while scrolling past them
    });
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <>
      <Navbar />
      <Header />
      {/* DotNavigation component was NOT here */}
      <Home />
      <Featured />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
