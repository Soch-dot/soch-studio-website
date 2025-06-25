import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home";
import Featured from "./components/Featured";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />     {/* NEW NAVBAR */}
      <Header />
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
