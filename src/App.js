import React, { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
// import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer"

import "./components/loadingScreen.css";
import "./components/Toastify.css"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loading, setLoading] = useState(false);
  const notify = () => toast("Click on the WATSON computer shown below and drag it around!");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      notify()
    }, 400);
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
          {/* <Navigation/> */}
          <NavBar/>
          <Home/>
          <About/>
          <Skills/>
          <Work></Work>
          {/* <Contact></Contact> */}
          <Footer/>
          <ToastContainer
            autoClose={10000}
            toastStyle={{backgroundColor: "#ede7dd", color: "#3e3e1f", fontWeight: "bold"}}  
            progressClassName="toastProgress"
          />
        </>
      )}
    </div>
  );
}

export default App;
