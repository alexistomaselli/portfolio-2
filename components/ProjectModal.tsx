
import React, { useEffect } from 'react';
import { X, ExternalLink, Smartphone, Monitor } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  const { content } = useLanguage();
  const labels = content.projects.modal;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-slate-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-slate-700 flex flex-col">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-900/50 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all z-10"
        >
          <X size={24} />
        </button>

        {/* Project Image Header */}
        <div className="relative h-64 md:h-80 w-full overflow-hidden bg-slate-900 group">
           <img 
             src={project.imageUrl} 
             alt={project.name} 
             className="w-full h-full object-cover opacity-80"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent"></div>
           <div className="absolute bottom-6 left-6 md:left-10">
             <h3 className="text-3xl font-bold text-white">{project.name}</h3>
             <div className="flex gap-2 mt-2">
               {project.tags.map(tag => (
                 <span key={tag} className="text-xs font-medium px-2 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                   {tag}
                 </span>
               ))}
             </div>
           </div>
        </div>

        {/* Description & Content */}
        <div className="p-6 md:p-10 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">{labels.about}</h4>
              <p className="text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="pt-4">
               <h4 className="text-lg font-semibold text-white mb-4">{labels.responsive}</h4>
               {/* Device View Toggle Simulation */}
               <div className="flex gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                  <button className="flex-1 flex flex-col items-center gap-2 p-3 bg-slate-700/50 rounded-lg text-blue-400 hover:bg-slate-700 transition">
                    <Monitor size={24} />
                    <span className="text-sm font-medium">Desktop</span>
                  </button>
                  <button className="flex-1 flex flex-col items-center gap-2 p-3 text-slate-400 hover:bg-slate-700/50 rounded-lg transition hover:text-slate-200">
                    <Smartphone size={24} />
                    <span className="text-sm font-medium">Mobile</span>
                  </button>
               </div>
            </div>
          </div>

          <div className="space-y-6">
             <div className="bg-slate-900 p-6 rounded-xl border border-slate-700">
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">{labels.links}</h4>
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-all"
                >
                  {labels.visit} <ExternalLink size={18} />
                </a>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
