
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A passionate engineer combining telecommunications expertise with modern software development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Journey</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Based in Nairobi, Kenya, I am a telecommunications and software engineer with hands-on experience 
              in RF transmission systems, network infrastructure, and modern software development technologies.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              My experience spans from working with broadcast transmission systems at Kenya Broadcasting Company 
              to electrical system maintenance at Kenya Electricity Generating Company, giving me a unique 
              perspective on both telecommunications and power systems.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Currently advancing my skills in AI and Machine Learning through the Power Learn Project, 
              I'm passionate about leveraging emerging technologies to solve real-world problems.
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Telecommunications Focus</h4>
                <p className="text-gray-600">
                  Expertise in satellite communications, microwave systems, DVB-T/DVB-S, 
                  5G networks, and RF analysis
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-purple-600">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Software Development</h4>
                <p className="text-gray-600">
                  Proficient in web technologies, database management, and AI/ML development 
                  with Python and modern frameworks
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-600">
              <CardContent className="p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Electrical Engineering</h4>
                <p className="text-gray-600">
                  Hands-on experience with electrical machines, substation equipment, 
                  and power distribution systems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
