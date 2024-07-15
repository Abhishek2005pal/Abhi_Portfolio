import React, { useState } from 'react';
import About from "./Components/About.js";
import Contact from "./Components/Contact.js";
import DSATracker from "./Components/dsa-project/dsa-tracker/src/App.js";
import Footer from "./Components/Footer.js";
import Hero from "./Components/Hero.js";
import Navbar from "./Components/Navbar.js";
import Projects from "./Components/Projects.js";
import PuzzleGame from './Components/puzzle-game/src/App.js';
import Skills from "./Components/Skills.js";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </>
        );
      case "dsa-tracker":
        return <DSATracker />;
      case "puzzle-game":
        return <PuzzleGame />;
      default:
        return <Hero />;
    }
  };

  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div>
        <button onClick={() => setCurrentPage("home")}>Home</button>
        <button onClick={() => setCurrentPage("dsa-tracker")}>DSA Tracker</button>
        <button onClick={() => setCurrentPage("puzzle-game")}>Puzzle Game</button>
      </div>
      {renderPage()}
    </div>
  );
}
