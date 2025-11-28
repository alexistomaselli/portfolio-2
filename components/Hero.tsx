
import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { content } = useLanguage();
  const { profile } = content;

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="flex flex-col items-center mb-8 animate-fade-in-up">
          <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full p-1 bg-gradient-to-tr from-blue-500 to-emerald-400 shadow-2xl">
             <img 
              src={profile.avatarUrl}
              alt={profile.name}
              className="w-full h-full rounded-full object-cover border-4 border-slate-900"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            {profile.name}
          </h1>
          <h2 className="text-xl md:text-2xl text-blue-400 font-medium mb-6">
            {profile.role}
          </h2>
          <p className="max-w-2xl text-slate-400 text-lg mb-10 leading-relaxed">
            {profile.about}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#projects" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-900/50"
            >
              {profile.buttons.projects} <ArrowRight size={18} />
            </a>
            <a 
              href="#contact" 
              className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3 rounded-full font-semibold transition-all border border-slate-700"
            >
              {profile.buttons.contact}
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-slate-400">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
