
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Telecommunications",
      icon: "📡",
      color: "blue",
      skills: [
        "Satellite Communications",
        "Microwave Communications", 
        "DVB-T and DVB-S",
        "Wireless Communications",
        "5G Networks",
        "Radio Frequency Analysis",
        "IP Networking",
        "Broadcasting Communications"
      ]
    },
    {
      title: "Software Development",
      icon: "💻",
      color: "purple",
      skills: [
        "HTML & CSS",
        "JavaScript",
        "Python",
        "MySQL",
        "Database Management"
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "green",
      skills: [
        "AI Chatbot Development",
        "ML Algorithms",
        "Data Analysis",
        "Python for AI/ML"
      ]
    },
    {
      title: "Electrical Engineering",
      icon: "⚡",
      color: "yellow",
      skills: [
        "Electrical Machine Operation",
        "Equipment Maintenance",
        "Substation Equipment Handling",
        "Power Systems"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "bg-blue-100 text-blue-800 border-blue-200",
      purple: "bg-purple-100 text-purple-800 border-purple-200",
      green: "bg-green-100 text-green-800 border-green-200",
      yellow: "bg-yellow-100 text-yellow-800 border-yellow-200"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-800 border-gray-200";
  };

  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Technical Skills</h2>
          </div>
          <p className="text-lg text-gray-600">
            A comprehensive skill set spanning telecommunications, software development, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <span className="text-2xl">{category.icon}</span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="outline"
                      className={`${getColorClasses(category.color)} border`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
