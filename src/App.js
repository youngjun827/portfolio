import React, { useEffect } from "react";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";

function App() {
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
}

export default App;
