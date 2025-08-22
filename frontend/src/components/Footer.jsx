import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">
              Abhishek Pathak
            </h3>
            <p className="text-slate-400">
              Marketing Strategist & Digital Growth Expert
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Skills', id: 'skills' },
                { name: 'Experience', id: 'experience' },
                { name: 'Projects', id: 'projects' },
                { name: 'Contact', id: 'contact' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    const element = document.getElementById(link.id);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-300 text-sm"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300 transform hover:scale-105"
            >
              <span className="text-sm">Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-slate-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-slate-400 text-sm">
            © {currentYear} Abhishek Pathak. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="text-red-400 fill-current" />
            <span>for marketing excellence</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;