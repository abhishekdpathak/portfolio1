import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, MapPin, Calendar } from 'lucide-react';
import { mockData } from '../data/mockData';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900 relative overflow-hidden animated-bg">
      {/* Floating Elements */}
      <div className="bg-particles">
        <div className="floating-element floating-circle float-2 text-emerald-300" style={{top: '10%', left: '8%'}}></div>
        <div className="floating-element floating-hexagon float-4 text-blue-300" style={{top: '30%', right: '12%'}}></div>
        <div className="floating-element floating-square float-1 text-purple-300" style={{bottom: '30%', left: '10%'}}></div>
        <div className="floating-element floating-triangle float-5 text-emerald-400" style={{bottom: '10%', right: '8%'}}></div>
        <div className="floating-element floating-circle float-3 text-yellow-300" style={{top: '70%', left: '88%'}}></div>
      </div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Professional <span className="text-emerald-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A track record of delivering exceptional results across diverse marketing roles, 
            consistently driving growth and innovation in every position.
          </p>
        </div>

        <div className="space-y-12">
          {mockData.experience.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index !== mockData.experience.length - 1 && (
                <div className="absolute left-4 md:left-8 top-24 w-0.5 h-full bg-gradient-to-b from-emerald-400 to-slate-700"></div>
              )}
              
              {/* Timeline Dot */}
              <div className="absolute left-2 md:left-6 top-8 w-4 h-4 bg-emerald-400 rounded-full border-4 border-slate-900"></div>
              
              <Card className="ml-12 md:ml-20 bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0">
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-400">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <Badge variant="outline" className="border-emerald-400 text-emerald-400 w-fit">
                      Marketing Professional
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-emerald-400 mb-3">Key Achievements & Responsibilities:</h4>
                    <div className="grid gap-3">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-300 leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Key Metrics Summary */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-slate-600">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            Impact <span className="text-emerald-400">Highlights</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-400 mb-2">20%</div>
              <div className="text-slate-300">Email Open Rate Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-slate-300">Brand Awareness Growth</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">15%</div>
              <div className="text-slate-300">Content Engagement Boost</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">10+</div>
              <div className="text-slate-300">Product Categories Managed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;