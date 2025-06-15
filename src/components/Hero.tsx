
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

const Hero = () => {
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
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-2xl border-4 border-white"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Chard Odhiambo
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          Telecommunications and Software Engineer
        </p>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          Bridging the gap between telecommunications infrastructure and cutting-edge software solutions. 
          Experienced in RF systems, network engineering, and AI/ML development.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
          >
            Get In Touch
          </Button>
          <Button 
            variant="outline"
            size="lg"
            className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3"
          >
            View Projects
          </Button>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 justify-center text-gray-600">
          <div className="flex items-center gap-2">
            <Phone size={18} />
            <span>+254797394105</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} />
            <span>chardodhiambo@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
