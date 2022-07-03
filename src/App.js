import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./components/loadingScreen.css";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 415);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="loadingScreen">
          <ScaleLoader
            size={40}
            color={"#8a3918"}
            loading={loading}
            speedMultiplier={"1.6"}
          />
        </div>
      ) : (
        <>
          <NavBar></NavBar>
          <Home></Home>
          <About></About>
          <Skills></Skills>
          <Work></Work>
          <Contact></Contact>
        </>
      )}
    </div>
  );
}

export default App;
