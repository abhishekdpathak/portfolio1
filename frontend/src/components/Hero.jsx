import React from 'react';
import { ArrowDown, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center relative overflow-hidden animated-bg">
      {/* Floating Elements */}
      <div className="bg-particles">
        <div className="floating-element floating-circle float-1 text-emerald-400" style={{top: '10%', left: '10%'}}></div>
        <div className="floating-element floating-square float-2 text-blue-400" style={{top: '20%', right: '15%'}}></div>
        <div className="floating-element floating-triangle float-3 text-purple-400" style={{bottom: '30%', left: '8%'}}></div>
        <div className="floating-element floating-hexagon float-4 text-emerald-300" style={{top: '60%', right: '20%'}}></div>
        <div className="floating-element floating-circle float-5 text-yellow-400" style={{bottom: '15%', right: '10%'}}></div>
        <div className="floating-element floating-square float-1 text-blue-300" style={{top: '80%', left: '20%'}}></div>
        <div className="floating-element floating-triangle float-2 text-emerald-500" style={{top: '15%', left: '70%'}}></div>
        <div className="floating-element floating-circle float-3 text-purple-300" style={{bottom: '60%', right: '8%'}}></div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-emerald-400">Marketing</span><br />
              <span className="text-gradient bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                Strategist
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Transforming brands through data-driven campaigns and innovative marketing strategies. 
              5+ years of proven expertise in digital marketing, campaign management, and business development.
            </p>
            
            {/* Quick Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-400" />
                <span className="text-sm">abhishekpathak1497@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400" />
                <span className="text-sm">+1 (587) 434-9045</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-emerald-400" />
                <span className="text-sm">Calgary (Open to relocate)</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-slate-900 px-8 py-3 text-lg transition-all duration-300"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Achievement Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-400 mb-2">5+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-slate-300">Brand Awareness Increase</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">20%</div>
              <div className="text-slate-300">Email Open Rate Boost</div>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-yellow-400 mb-2">15%</div>
              <div className="text-slate-300">Content Engagement Growth</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;