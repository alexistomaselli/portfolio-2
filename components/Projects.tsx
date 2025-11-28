
import React, { useState } from 'react';
import { Project } from '../types';
import ProjectModal from './ProjectModal';
import { Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { content } = useLanguage();
  const { projects } = content;

  return (
    <section id="projects" className="py-20 bg-slate-900 relative scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {projects.title}
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            {projects.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.list.map((project) => (
            <div 
              key={project.id}
              className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative h-64 overflow-hidden cursor-pointer">
                <img 
                  src={project.imageUrl}
                  alt={project.name}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex flex-col items-center gap-3">
                    <h3 className="text-xl font-bold text-white">{project.name}</h3>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium">
                      <Eye size={16} /> {projects.viewDetails}
                    </button>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-lg font-bold text-slate-100 group-hover:text-blue-400 transition-colors">
                     {project.name}
                   </h3>
                   <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-slate-700 text-slate-300`}>
                      {project.category}
                   </span>
                </div>
                <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-xs text-blue-300 bg-blue-900/30 px-2 py-1 rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;
