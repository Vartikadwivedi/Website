import React, { useState, useEffect } from 'react';
import Greeting from "./components/Greeting";
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FlowerAnimation from "./components/FlowerAnimation";

function App() {
  const [darkMode, setDarkMode] = useState(() =>
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    // AOS.refresh(); // Refresh animations on route change
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'} text-gray-800 dark:text-gray-100`}>
      <FlowerAnimation />
      <Greeting />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
