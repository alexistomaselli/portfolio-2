
import React from 'react';
import { Mail, Linkedin, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { content } = useLanguage();
  const { contact, profile } = content;

  return (
    <footer id="contact" className="bg-slate-950 py-20 border-t border-slate-900 scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">{contact.title}</h2>
        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          {contact.text}
        </p>

        <div className="flex flex-col items-center gap-6 mb-12">
           {/* Primary WhatsApp Button */}
           <a 
             href={`https://wa.me/${profile.whatsapp}`}
             target="_blank"
             rel="noopener noreferrer"
             className="flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-all transform hover:scale-105 shadow-lg shadow-emerald-900/30"
           >
             <MessageCircle size={24} />
             {contact.whatsappBtn}
           </a>

           <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 mt-4">
             <a 
              href={`mailto:${profile.email}`} 
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group"
            >
              <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                <Mail size={20} /> 
              </div>
              {profile.email}
            </a>
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors group"
            >
              <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                <Linkedin size={20} /> 
              </div>
              /alexistomaselli
            </a>
           </div>
        </div>

        <div className="text-slate-600 text-sm border-t border-slate-900 pt-8">
          &copy; {new Date().getFullYear()} {profile.name}. {contact.rights}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
