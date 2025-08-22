import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { mockData } from '../data/mockData';
import { BarChart3, Target, Code, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Marketing Strategy",
      icon: <Target className="w-6 h-6 text-emerald-400" />,
      skills: mockData.skills.marketing,
      color: "emerald"
    },
    {
      title: "Digital Marketing",
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      skills: mockData.skills.digital,
      color: "blue"
    },
    {
      title: "Technical Skills",
      icon: <Code className="w-6 h-6 text-purple-400" />,
      skills: mockData.skills.technical,
      color: "purple"
    },
    {
      title: "Leadership",
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      skills: mockData.skills.leadership,
      color: "yellow"
    }
  ];

  const getProgressColor = (color) => {
    const colors = {
      emerald: "bg-emerald-400",
      blue: "bg-blue-400",
      purple: "bg-purple-400",
      yellow: "bg-yellow-400"
    };
    return colors[color] || "bg-emerald-400";
  };

  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Core <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A comprehensive skill set built through years of hands-on experience in marketing, 
            digital strategy, and team leadership across diverse industries and markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  {category.icon}
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-slate-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2.5">
                      <div 
                        className={`${getProgressColor(category.color)} h-2.5 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Tools Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Professional <span className="text-emerald-400">Tools & Platforms</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Adobe Creative Suite",
              "Google Analytics",
              "Salesforce",
              "HubSpot",
              "Microsoft 365",
              "Canva",
              "Final Cut Pro",
              "After Effects",
              "ClickUp",
              "Wrike",
              "Affinity Designer",
              "HTML/CSS"
            ].map((tool, index) => (
              <div key={index} className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-center hover:bg-slate-900/70 transition-all duration-300 transform hover:scale-105">
                <span className="text-slate-300 font-medium text-sm">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;