
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CONTENT } from '../constants';
import { Language, UIContent } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: UIContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content: CONTENT[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
