
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { content, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'it', label: 'IT' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="text-2xl font-bold tracking-tighter text-white"
        >
          AT<span className="text-blue-500">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {content.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center space-x-2 pl-4 border-l border-slate-700">
             <Globe size={16} className="text-slate-500" />
             {languages.map((lang) => (
               <button
                 key={lang.code}
                 onClick={() => setLanguage(lang.code)}
                 className={`text-xs font-bold transition-colors ${
                   language === lang.code 
                     ? 'text-blue-500' 
                     : 'text-slate-500 hover:text-slate-300'
                 }`}
               >
                 {lang.label}
               </button>
             ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-t border-slate-800 shadow-xl p-4 flex flex-col space-y-4">
          {content.nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-slate-300 hover:text-blue-400 py-2 px-4 block rounded hover:bg-slate-800"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          {/* Mobile Language Switcher */}
          <div className="flex justify-center gap-4 py-2 border-t border-slate-800 mt-2">
            {languages.map((lang) => (
               <button
                 key={lang.code}
                 onClick={() => setLanguage(lang.code)}
                 className={`text-sm font-bold px-3 py-1 rounded transition-colors ${
                   language === lang.code 
                     ? 'bg-blue-600 text-white' 
                     : 'bg-slate-800 text-slate-400'
                 }`}
               >
                 {lang.label}
               </button>
             ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
