import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import ThemeSwitcher from './components/ThemeSwitcher';

import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-slate-900 dark:text-slate-100 font-sans transition-colors duration-500 relative">
      {/* Global Enhancement Components */}
      <ScrollProgress />
      <ParticleBackground />
      <ThemeSwitcher />

      <Navbar />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
