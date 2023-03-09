import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./pages/Footer";

function App() {
  return (
    <Router>
        <Header />
      <div className="container-fluid">

        <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Skills" element={<Skills />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/*" element={<Home />} />   
          </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
