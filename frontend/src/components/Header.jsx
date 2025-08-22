import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-emerald-400">
            Abhishek Pathak
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-slate-300 hover:text-emerald-400 transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-emerald-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-700">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-left"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('experience')}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-left"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-left"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-slate-300 hover:text-emerald-400 transition-colors duration-300 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;