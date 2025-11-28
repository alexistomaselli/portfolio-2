
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-slate-900 min-h-screen text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <About />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  );
}

export default App;
