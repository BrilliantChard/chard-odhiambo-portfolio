
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';
import { useState } from 'react';

const Index = () => {
  const [showSections, setShowSections] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Navigation showSections={showSections} />
      <Hero onExploreMore={() => setShowSections(true)} showSections={showSections} />
      {showSections && (
        <>
          <About />
          <Experience />
          <Education />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Index;
