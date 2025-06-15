
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Telecommunications Engineering Intern",
      company: "Kenya Broadcasting Company, Nairobi",
      period: "Jan 2025 – April 2025",
      description: [
        "Configuration and troubleshooting of IP networking for media transmission, enhancing understanding of real-time data flow in large-scale networks",
        "Worked with RF transmission equipment, ensuring optimal signal quality and system efficiency",
        "Developed skills in real-time system monitoring, diagnosing, and resolving transmission issues to maintain seamless broadcast operations",
        "Gained hands-on experience in broadcast transmission systems, including signal distribution and modulation techniques"
      ],
      skills: ["IP Networking", "RF Transmission", "System Monitoring", "Signal Processing"]
    },
    {
      title: "Electrical Engineering Intern",
      company: "Kenya Electricity Generating Company",
      period: "May 2023 – Aug 2023",
      description: [
        "Conducted maintenance of electrical systems, including motors, generators, transformers, and auxiliary circuits",
        "Performed inspections and testing on electrical switchgear and control centers",
        "Conducted busbar maintenance and isolator operations",
        "Oversaw market research to identify emerging trends, customer needs, and competitor strategies"
      ],
      skills: ["Electrical Maintenance", "Switchgear Testing", "Generator Systems", "Market Research"]
    },
    {
      title: "Telecom and Electrical Engineer Trainee",
      company: "Dedan Kimathi University of Technology",
      period: "May 2022 – Aug 2022",
      description: [
        "Participated in the full electrical wiring of a storey building, including conduit laying, circuit installation, and load distribution",
        "Assisted in installing and testing lighting systems, sockets, and distribution boards as per safety standards"
      ],
      skills: ["Electrical Wiring", "Circuit Installation", "Safety Standards", "Load Distribution"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-gray-900">Professional Experience</h2>
          </div>
          <p className="text-lg text-gray-600">
            Building expertise through hands-on experience in telecommunications and electrical engineering
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className="text-gray-600 w-fit">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-600 flex items-start gap-2">
                      <span className="text-blue-600 mt-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-blue-100 text-blue-800">
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

export default Experience;
