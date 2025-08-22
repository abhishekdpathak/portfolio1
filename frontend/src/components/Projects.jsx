import React, { useState } from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Award, TrendingUp } from 'lucide-react';
import { mockData } from '../data/mockData';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'Brand Strategy', 'Product Marketing', 'Business Development', 'Innovation'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? mockData.projects 
    : mockData.projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Showcasing strategic marketing initiatives and campaigns that delivered measurable results 
            and drove significant business growth across various industries.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={
                selectedCategory === category
                  ? "bg-emerald-500 hover:bg-emerald-600 text-white"
                  : "border-slate-600 text-slate-300 hover:bg-slate-700"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-slate-900/50 border-slate-700 hover:bg-slate-900/70 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <Badge variant="outline" className="border-emerald-400 text-emerald-400">
                      {project.category}
                    </Badge>
                    <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-6 h-6 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Results Section */}
                <div className="mb-6">
                  <h4 className="flex items-center gap-2 text-lg font-semibold text-emerald-400 mb-3">
                    <Award size={18} />
                    Key Results
                  </h4>
                  <div className="space-y-2">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start gap-2">
                        <TrendingUp size={16} className="text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies/Skills Used */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">SKILLS & TOOLS UTILIZED</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-slate-800 text-slate-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Drive Your Next Campaign?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Let's collaborate to create data-driven marketing strategies that deliver exceptional results 
              and accelerate your business growth.
            </p>
            <Button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg"
            >
              Start a Conversation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;