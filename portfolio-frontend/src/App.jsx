import React, { useState } from "react";
import Header from "./components/Header";
import Snippets from "./components/Snippets";
import RightPanel from "./components/RightPanel";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {
  const [selectedTech, setSelectedTech] = useState("");

  const handleTechSelect = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <div className="app">
      <Header onTechSelect={handleTechSelect} selectedTech={selectedTech} />
      
      <div className="main-content">
        <div className="content">
          <Snippets selectedTech={selectedTech} />
          <AboutMe />
        </div>
        
        <RightPanel />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
