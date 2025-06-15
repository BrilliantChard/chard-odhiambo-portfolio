
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, Linkedin, Github, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Ready to collaborate on innovative telecommunications and software solutions
          </p>
        </div>

        <Card className="shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl text-gray-900">Let's Connect</CardTitle>
            <p className="text-gray-600">
              I'm always interested in discussing new opportunities and innovative projects
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <Phone className="mx-auto mb-4 text-blue-600" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                  <p className="text-gray-600">+254797394105</p>
                  <Button 
                    className="mt-4 w-full"
                    onClick={() => window.open('tel:+254797394105')}
                  >
                    Call Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <Mail className="mx-auto mb-4 text-purple-600" size={32} />
                  <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                  <p className="text-gray-600">chardodhiambo@gmail.com</p>
                  <Button 
                    className="mt-4 w-full"
                    variant="outline"
                    onClick={() => window.open('mailto:chardodhiambo@gmail.com')}
                  >
                    Send Email
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-4 text-center">
                  <Linkedin className="mx-auto mb-3 text-blue-600" size={28} />
                  <h4 className="font-semibold text-gray-900 mb-2">LinkedIn</h4>
                  <Button 
                    className="w-full"
                    variant="outline"
                    onClick={() => window.open('https://www.linkedin.com/in/chard-odhiambo-57636136a', '_blank')}
                  >
                    Connect
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-gray-100 hover:border-gray-300 transition-colors">
                <CardContent className="p-4 text-center">
                  <Github className="mx-auto mb-3 text-gray-700" size={28} />
                  <h4 className="font-semibold text-gray-900 mb-2">GitHub</h4>
                  <Button 
                    className="w-full"
                    variant="outline"
                    onClick={() => window.open('https://github.com/BrilliantChard', '_blank')}
                  >
                    View Code
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-4 text-center">
                  <Facebook className="mx-auto mb-3 text-blue-700" size={28} />
                  <h4 className="font-semibold text-gray-900 mb-2">Facebook</h4>
                  <Button 
                    className="w-full"
                    variant="outline"
                    onClick={() => window.open('https://www.facebook.com/share/19cX1PWRc7/', '_blank')}
                  >
                    Follow
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-6 border-t">
              <p className="text-gray-600 mb-4">
                <strong>Location:</strong> 00100 - Nairobi City, Kenya
              </p>
              <p className="text-sm text-gray-500">
                Available for full-time positions, consulting, and collaborative projects
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
