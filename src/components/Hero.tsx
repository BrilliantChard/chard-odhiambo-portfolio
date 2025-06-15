
import { Button } from '@/components/ui/button';
import { Phone, Mail, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Hero = () => {
  const [showExplore, setShowExplore] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="text-center max-w-4xl mx-auto animate-fade-in">
        {/* Profile Picture */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/020df31d-dec8-47fc-9aa6-30791321dc70.png"
              alt="Chard Odhiambo"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-white dark:border-gray-700"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Chard Odhiambo
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Telecommunications and Software Engineer
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Bridging the gap between telecommunications infrastructure and cutting-edge software solutions. 
          Experienced in RF systems, network engineering, and AI/ML development.
        </p>

        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-600 dark:text-gray-400 mb-12">
          <div className="flex items-center gap-2 justify-center">
            <Phone size={18} />
            <span>+254797394105</span>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <Mail size={18} />
            <span>chardodhiambo@gmail.com</span>
          </div>
        </div>

        {/* Explore More Button */}
        <div className="mb-8">
          <Button 
            onClick={() => setShowExplore(!showExplore)}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 flex items-center gap-2 mx-auto"
          >
            Explore More
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showExplore ? 'rotate-180' : ''}`} />
          </Button>
        </div>

        {/* Navigation Menu - Shows when Explore More is clicked */}
        {showExplore && (
          <div className="animate-fade-in bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">Explore My Portfolio</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { name: 'About', id: 'about' },
                { name: 'Experience', id: 'experience' },
                { name: 'Education', id: 'education' },
                { name: 'Skills', id: 'skills' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant="outline"
                  onClick={() => {
                    scrollToSection(item.id);
                    setShowExplore(false);
                  }}
                  className="text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400"
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
