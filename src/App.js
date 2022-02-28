import React from "react";
import Card from "./components/Card";
import About from './components/About'
import Footer from './components/Footer'
import Skills from "./components/Skills";
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div className="min-h-screen py-10 px-3 sm: bg-gray-100">
      <Card />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
