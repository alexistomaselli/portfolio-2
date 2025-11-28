
import React from 'react';
import { Database, Layout, Server, Bot } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const iconMap = [
  <Bot size={24} />,
  <Layout size={24} />,
  <Server size={24} />,
  <Database size={24} />,
];

const About: React.FC = () => {
  const { content } = useLanguage();
  const { about, profile } = content;

  return (
    <section id="about" className="py-20 bg-slate-800/50 border-t border-slate-800 scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">
              {about.title}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              {about.intro}
            </p>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              {about.focus}
            </p>
            <div className="flex gap-4">
              <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-700">
                <span className="block text-3xl font-bold text-blue-400">{profile.stats.projects}</span>
                <span className="text-sm text-slate-400">{profile.stats.projectsLabel}</span>
              </div>
              <div className="text-center p-4 bg-slate-900 rounded-lg border border-slate-700">
                <span className="block text-3xl font-bold text-emerald-400">{profile.stats.commitment}</span>
                <span className="text-sm text-slate-400">{profile.stats.commitmentLabel}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {about.skills.map((skill, idx) => (
              <div key={idx} className="p-6 bg-slate-900 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                <div className="text-blue-500 mb-3">{iconMap[idx]}</div>
                <h3 className="font-bold text-white mb-1">{skill.title}</h3>
                <p className="text-sm text-slate-400">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
