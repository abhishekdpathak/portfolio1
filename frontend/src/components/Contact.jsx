import React from 'react';
import { Card, CardContent } from './ui/card';
import { Mail, Phone, MapPin, Linkedin, Calendar } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-emerald-400" />,
      label: "Email",
      value: "abhishekpathak1497@gmail.com",
      href: "mailto:abhishekpathak1497@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-400" />,
      label: "Phone",
      value: "+1 (587) 434-9045",
      href: "tel:+15874349045"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-400" />,
      label: "Location",
      value: "Calgary (Open to relocate)",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Ready to take your marketing to the next level? Let's discuss how we can work together 
            to achieve your business goals and drive exceptional results.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">
                  Let's Start a Conversation
                </h3>
                <p className="text-slate-300 mb-8 leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                  or share insights about marketing strategy and digital growth. Whether you're looking 
                  for a marketing professional or want to explore partnership opportunities, I'd love to hear from you.
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        {info.icon}
                        <div>
                          <div className="text-sm text-slate-400 font-medium">{info.label}</div>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-white hover:text-emerald-400 transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-white font-medium">{info.value}</div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-emerald-500/10 to-blue-500/10 border-slate-600">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-emerald-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      Ready to Collaborate?
                    </h4>
                    <p className="text-slate-300 mb-6">
                      I'm currently open to new opportunities and excited to bring my marketing expertise 
                      to forward-thinking organizations.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      onClick={() => window.open('mailto:abhishekpathak1497@gmail.com?subject=Marketing Collaboration Opportunity', '_blank')}
                      className="w-full bg-emerald-500 hover:bg-emerald-600 text-white"
                    >
                      Send Email
                    </Button>
                    <Button 
                      onClick={() => window.open('tel:+15874349045', '_blank')}
                      variant="outline"
                      className="w-full border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900"
                    >
                      Call Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Highlights */}
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8">
                  <h4 className="text-xl font-bold text-white mb-6 text-center">What I Bring</h4>
                  <div className="space-y-4">
                    {[
                      "5+ years of proven marketing experience",
                      "Data-driven campaign optimization",
                      "Cross-functional team leadership",
                      "Multi-market experience (Canada & India)",
                      "Technical & creative skill combination",
                      "Results-focused approach"
                    ].map((highlight, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <span className="text-slate-300">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;