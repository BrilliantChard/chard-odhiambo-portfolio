
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { School, Award } from 'lucide-react';

const Education = () => {
  const certifications = [
    "Certified PCB Designer – Udemy (Oct 2024)",
    "Cisco Certified: Introduction to Cybersecurity – Cisco Networking Academy (Feb 2023)",
    "Digital Electronics Fundamentals – Mind Luster (Feb 2025)",
    "AI Chatbot Development – Udemy (May 2025)"
  ];

  return (
    <section id="education" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <School className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Education & Certifications</h2>
          </div>
          <p className="text-lg text-gray-600">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <School className="text-blue-600" size={24} />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Bachelor of Science in Telecommunication and Information Engineering
                </h3>
                <p className="text-blue-600 font-medium">Dedan Kimathi University of Technology</p>
                <Badge variant="outline" className="mt-2">July 2020 – Dec 2024</Badge>
              </div>
              
              <div className="pt-4 border-t">
                <h4 className="font-semibold text-gray-900 mb-2">Ongoing Studies</h4>
                <div>
                  <p className="font-medium">Software Engineering: AI and Machine Learning</p>
                  <p className="text-blue-600">Power Learn Project – Africa Scholarship</p>
                  <Badge variant="outline" className="mt-1">Feb 2025 – Present</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl">
                <Award className="text-purple-600" size={24} />
                Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Award className="text-purple-600 mt-1" size={16} />
                    <span className="text-gray-700">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Languages */}
        <Card className="mt-8 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-xl">
              <span className="text-green-600">🌍</span>
              Languages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-4">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">English</Badge>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">Swahili</Badge>
              <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2">German (Basic)</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
