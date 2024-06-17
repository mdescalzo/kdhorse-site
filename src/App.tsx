import React from "react";
import Summary from "./components/Summary";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import Gallery from "./components/Gallery";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src="KD_Logo_white.png" alt="Logo" className="App-logo" />
      </header>
      <Summary />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
