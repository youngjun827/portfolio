import React, { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work/Work";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {}, []);

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Footer />
    </>
  );
};

export default App;