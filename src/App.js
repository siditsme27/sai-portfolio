import React from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Education from './sections/Education';
import WorkExperience from './sections/WorkExperience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Education />
      <WorkExperience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
