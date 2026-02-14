import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import ChatWidget from './components/ChatWidget';

function App() {
  return (
    <div className="bg-dark-900 min-h-screen text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-200">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* Floating Chat Widget */}
      <ChatWidget />
    </div>
  );
}

export default App;
