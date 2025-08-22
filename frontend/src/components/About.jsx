import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-8 h-8 text-emerald-400" />,
      title: "Proven Results",
      description: "5+ years delivering measurable marketing outcomes with 20-40% performance improvements"
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Strategic Focus",
      description: "Data-driven approach to campaign planning and execution with emphasis on ROI optimization"
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: "Leadership",
      description: "Experienced in team management, mentorship, and cross-functional collaboration"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: "Growth Oriented",
      description: "Consistently achieved significant increases in brand awareness, engagement, and conversions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-emerald-400 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Photo Section */}
          <div className="lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden border-4 border-emerald-400/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3NTU4ODYxNTB8MA&ixlib=rb-4.1.0&q=85"
                  alt="Abhishek Pathak - Marketing Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-xl"></div>
            </div>
          </div>

          <div className="lg:order-1">
            <h3 className="text-3xl font-bold text-white mb-6">
              Marketing Professional with a Passion for Results
            </h3>
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                With over 5 years of experience in the marketing sector, I am a dedicated professional 
                with extensive knowledge of marketing tactics, consumer engagement, and business development. 
                My expertise spans across digital marketing, campaign management, and strategic planning.
              </p>
              <p>
                I specialize in analyzing market trends and developing comprehensive marketing strategies 
                that drive customer acquisition, retention, and loyalty. My approach combines creative 
                thinking with data-driven insights to deliver powerful campaigns that exceed expectations.
              </p>
              <p>
                My educational background includes a Diploma in Business Administration with a Major in 
                Marketing, complemented by an Engineering degree that provides me with analytical and 
                problem-solving skills that enhance my marketing strategies.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="text-2xl font-bold text-emerald-400">10+</div>
                <div className="text-slate-300 text-sm">Product Categories</div>
              </div>
              <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <div className="text-2xl font-bold text-blue-400">3+</div>
                <div className="text-slate-300 text-sm">Major Campaigns</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-3">
                    {highlight.title}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-emerald-400 mb-4">Education</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-xl font-semibold text-white">Business Administration - Marketing</h5>
                  <p className="text-emerald-400 font-medium">Southern Alberta Institute of Technology</p>
                  <p className="text-slate-300 mt-2">
                    Specialized in Brand Management, Market Research, Marketing Strategies, and Consumer Behavior
                  </p>
                </div>
                <div>
                  <h5 className="text-xl font-semibold text-white">Bachelor of Engineering</h5>
                  <p className="text-emerald-400 font-medium">Marwadi University</p>
                  <p className="text-slate-300 mt-2">
                    Technical foundation in Project Management, Operations, and Analytical Problem-Solving
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-blue-400 mb-4">Core Competencies</h4>
              <div className="space-y-3">
                {[
                  "Marketing Strategy & Campaign Planning",
                  "Digital Marketing & SEO/SEM",
                  "Social Media Management",
                  "Email Marketing & Automation",
                  "Data Analysis & Performance Optimization",
                  "Brand Management & Content Creation",
                  "Team Leadership & Project Coordination",
                  "Market Research & Consumer Insights"
                ].map((competency, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                    <span className="text-slate-300">{competency}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;