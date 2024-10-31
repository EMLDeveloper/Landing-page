import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Details from "./Components/Details";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Contact />
      <Details />
      <Footer />
    </div>
  );
}

export default App;
