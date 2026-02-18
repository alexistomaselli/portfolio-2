
import { UIContent, Project } from './types';

const COMMON_PROFILE = {
  name: "Alexis Tomaselli",
  email: "alexistomaselli@gmail.com",
  whatsapp: "543388430068",
  linkedin: "https://www.linkedin.com/in/alexis-tomaselli",
  avatarUrl: "/images/alexis-profile.jpg",
};

// --- HELPER TO GENERATE PROJECTS WITH TRANSLATED TEXTS ---
// This keeps image URLs and Tags consistent while changing descriptions

const getProjects = (lang: 'es' | 'en' | 'it'): Project[] => {
  const descriptions = {
    ktracker: {
      es: 'Sistema de gestión y seguimiento de proyectos en tiempo real. Monitoreo de KPIs y asignación de recursos.',
      en: 'Real-time project management and tracking system. KPI monitoring and resource allocation.',
      it: 'Sistema di gestione e monitoraggio progetti in tempo reale. Monitoraggio KPI e allocazione risorse.'
    },
    consorcio: {
      es: 'Plataforma integral para la administración eficiente de consorcios y edificios. Gestión de expensas y comunicación.',
      en: 'Comprehensive platform for efficient condominium and building management. Expense management and communication.',
      it: 'Piattaforma completa per la gestione efficiente di condomini ed edifici. Gestione spese e comunicazione.'
    },
    afpets: {
      es: 'E-commerce especializado en alimentos y accesorios para mascotas. Plataforma intuitiva para dueños de perros y gatos.',
      en: 'E-commerce specialized in pet food and accessories. Intuitive platform for dog and cat owners.',
      it: 'E-commerce specializzato in alimenti e accessori per animali domestici. Piattaforma intuitiva per proprietari di cani e gatti.'
    },
    valora: {
      es: 'Plataforma de gestión de siniestros y peritaje vehicular potenciada con IA. Conecta talleres y aseguradoras mediante un dashboard inteligente.',
      en: 'Claims management and vehicle appraisal platform powered by AI. Connects workshops and insurers via an intelligent dashboard.',
      it: 'Piattaforma di gestione sinistri e perizia veicoli potenziata da AI. Collega officine e assicurazioni tramite una dashboard intelligente.'
    },
    clochette: {
      es: 'Sitio web elegante para restaurante de alta cocina. Incluye sistema de reservas y galería de menú interactiva.',
      en: 'Elegant website for a fine dining restaurant. Includes reservation system and interactive menu gallery.',
      it: 'Sito web elegante per ristorante di alta cucina. Include sistema di prenotazione e galleria menu interattiva.'
    },
    ferrara: {
      es: 'Portfolio corporativo para empresa de construcción y remodelación. Enfoque en la exhibición visual de trabajos realizados.',
      en: 'Corporate portfolio for a construction and remodeling company. Focus on visual showcase of completed works.',
      it: 'Portfolio aziendale per impresa di costruzione e ristrutturazione. Focus sull\'esposizione visiva dei lavori realizzati.'
    },
    emmanuel: {
      es: 'Plataforma para organización sin fines de lucro, facilitando donaciones y difusión de misiones globales.',
      en: 'Platform for a non-profit organization, facilitating donations and global missions outreach.',
      it: 'Piattaforma per organizzazione no-profit, che facilita donazioni e diffusione delle missioni globali.'
    },
    medical: {
      es: 'Tema de WordPress premium diseñado para instituciones médicas. Integra gestión de turnos, portal del paciente y soporte de WooCommerce.',
      en: 'Premium WordPress theme designed for medical institutions. Integrates appointment management, patient portal, and WooCommerce support.',
      it: 'Tema WordPress premium progettato per istituzioni mediche. Integra gestione appuntamenti, portale del paziente e supporto WooCommerce.'
    }
  };

  return [
    {
      id: '12',
      name: 'Medical',
      slug: 'medical-theme',
      description: descriptions.medical[lang],
      url: 'https://medical.dydlabs.com/',
      tags: ['WordPress', 'Medical', 'WooCommerce'],
      category: 'medical',
      imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop',
    },
    {
      id: '11',
      name: 'K-Tracker',
      slug: 'k-tracker',
      description: descriptions.ktracker[lang],
      url: 'https://k-tracker.kaistrategicconsulting.com/',
      tags: ['SaaS', 'Management', 'Dashboard'],
      category: 'corporate',
      imageUrl: '/images/hero-3.webp',
    },
    {
      id: '10',
      name: 'Consorcio Hub',
      slug: 'consorcio-hub',
      description: descriptions.consorcio[lang],
      url: 'https://consorcio-hub-consorcio-hub-s.krpwqr.easypanel.host/',
      tags: ['PropTech', 'Administration', 'SaaS'],
      category: 'corporate',
      imageUrl: '/images/hero-consorcio-hub.jpg',
    },
    {
      id: '8',
      name: 'AFPets',
      slug: 'afpets',
      description: descriptions.afpets[lang],
      url: 'https://afpets.com',
      tags: ['E-commerce', 'Pets', 'Retail'],
      category: 'e-commerce',
      imageUrl: 'https://afpets.com/assets/dogs-hero-Cn9MNITh.png',
    },
    {
      id: '7',
      name: 'Valora Plus',
      slug: 'valora',
      description: descriptions.valora[lang],
      url: 'https://valora.plus',
      tags: ['Fintech', 'Insurtech', 'AI & Auto'],
      category: 'corporate',
      imageUrl: 'https://valora.plus/assets/hero-analytics-HCZweFY8.jpg',
    },
    {
      id: '3',
      name: 'La Clochette',
      slug: 'laclochette',
      description: descriptions.clochette[lang],
      url: 'https://www.laclochette.it',
      tags: ['Hospitality', 'UX/UI', 'Frontend'],
      category: 'corporate',
      imageUrl: 'https://www.laclochette.it/wp-content/uploads/2023/12/sunlight-over-dutch-farmland-in-summer-2022-02-02-03-49-47-utc-min-v2.jpg',
    },
    {
      id: '4',
      name: 'Ferrara Ristrutturaciones',
      slug: 'ferrara',
      description: descriptions.ferrara[lang],
      url: 'https://ferrararistrutturazioni.com',
      tags: ['Construction', 'Portfolio', 'Business'],
      category: 'corporate',
      imageUrl: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800&h=600',
    },
    {
      id: '5',
      name: 'Emmanuel Global Missions',
      slug: 'emmanuel',
      description: descriptions.emmanuel[lang],
      url: 'https://www.emmanuelglobalmissions.org',
      tags: ['Non-profit', 'Donations', 'Community'],
      category: 'non-profit',
      imageUrl: 'https://www.emmanuelglobalmissions.org//assets/hero-divine-light-D6cvBJl1.jpg',
    },
  ];
};

export const CONTENT: Record<'es' | 'en' | 'it', UIContent> = {
  es: {
    nav: [
      { label: 'Inicio', href: '#hero' },
      { label: 'Sobre Mí', href: '#about' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Contacto', href: '#contact' },
    ],
    profile: {
      ...COMMON_PROFILE,
      role: "Ingeniero en Sistemas | Desarrollador Full-Stack",
      about: "Ingeniero en Sistemas apasionado por crear soluciones tecnológicas de alto impacto. Especializado en desarrollo Full-Stack, Automatización e Inteligencia Artificial, transformo ideas complejas en ecosistemas digitales eficientes y escalables.",
      stats: {
        projects: "8+",
        projectsLabel: "Proyectos Mayores",
        commitment: "100%",
        commitmentLabel: "Compromiso"
      },
      buttons: {
        projects: "Ver Proyectos",
        contact: "Contactarme"
      }
    },
    projects: {
      title: "Proyectos Destacados",
      subtitle: "Una selección de trabajos recientes que abarcan desde sistemas médicos complejos hasta plataformas de comercio electrónico.",
      list: getProjects('es'),
      viewDetails: "Ver Detalles",
      modal: {
        about: "Sobre el Proyecto",
        responsive: "Vistas Responsivas",
        links: "Links",
        visit: "Ver Sitio Web"
      }
    },
    about: {
      title: "Sobre Mí",
      intro: "Como Ingeniero en Sistemas, mi enfoque combina la solidez del desarrollo de software tradicional con la innovación de las nuevas tecnologías. Me especializo en crear aplicaciones web robustas y en el diseño de arquitecturas escalables.",
      focus: "Actualmente, mi carrera se centra fuertemente en la automatización de procesos y el desarrollo de soluciones con Inteligencia Artificial. Ayudo a empresas y organizaciones a optimizar sus flujos de trabajo, reducir tareas repetitivas e integrar modelos de IA para potenciar la toma de decisiones y la eficiencia operativa.",
      skills: [
        { title: "AI & Automation", desc: "Integración LLM, n8n, Python Scripting, Chatbots" },
        { title: "Frontend Development", desc: "React, Tailwind CSS, HTML5, CSS3" },
        { title: "Backend Systems", desc: "Node.js, Python, REST APIs" },
        { title: "Database Management", desc: "PostgreSQL, MongoDB, MySQL" },
      ]
    },
    contact: {
      title: "¿Hablamos?",
      text: "Estoy disponible para potenciar tu negocio con soluciones de software a medida, automatizaciones e Inteligencia Artificial.",
      whatsappBtn: "Contactar por WhatsApp",
      rights: "Todos los derechos reservados."
    }
  },
  en: {
    nav: [
      { label: 'Home', href: '#hero' },
      { label: 'About', href: '#about' },
      { label: 'Projects', href: '#projects' },
      { label: 'Contact', href: '#contact' },
    ],
    profile: {
      ...COMMON_PROFILE,
      role: "Systems Engineer | Full-Stack Developer",
      about: "Systems Engineer passionate about creating high-impact technological solutions. Specialized in Full-Stack development, Automation, and Artificial Intelligence, I transform complex ideas into efficient and scalable digital ecosystems.",
      stats: {
        projects: "8+",
        projectsLabel: "Major Projects",
        commitment: "100%",
        commitmentLabel: "Commitment"
      },
      buttons: {
        projects: "View Projects",
        contact: "Contact Me"
      }
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of recent works ranging from complex medical systems to e-commerce platforms.",
      list: getProjects('en'),
      viewDetails: "View Details",
      modal: {
        about: "About the Project",
        responsive: "Responsive Views",
        links: "Links",
        visit: "Visit Website"
      }
    },
    about: {
      title: "About Me",
      intro: "As a Systems Engineer, my approach combines the robustness of traditional software development with the innovation of new technologies. I specialize in building robust web applications and designing scalable architectures.",
      focus: "Currently, my career is strongly focused on process automation and AI solution development. I help companies and organizations optimize their workflows, reduce repetitive tasks, and integrate AI models to enhance decision-making and operational efficiency.",
      skills: [
        { title: "AI & Automation", desc: "LLM Integration, n8n, Python Scripting, Chatbots" },
        { title: "Frontend Development", desc: "React, Tailwind CSS, HTML5, CSS3" },
        { title: "Backend Systems", desc: "Node.js, Python, REST APIs" },
        { title: "Database Management", desc: "PostgreSQL, MongoDB, MySQL" },
      ]
    },
    contact: {
      title: "Let's Talk?",
      text: "I am available to empower your business with custom software solutions, automations, and Artificial Intelligence.",
      whatsappBtn: "Contact via WhatsApp",
      rights: "All rights reserved."
    }
  },
  it: {
    nav: [
      { label: 'Home', href: '#hero' },
      { label: 'Su di Me', href: '#about' },
      { label: 'Progetti', href: '#projects' },
      { label: 'Contatti', href: '#contact' },
    ],
    profile: {
      ...COMMON_PROFILE,
      role: "Ingegnere di Sistemi | Sviluppatore Full-Stack",
      about: "Ingegnere di Sistemi appassionato nella creación di soluzioni tecnologiche ad alto impatto. Specializzato nello sviluppo Full-Stack, Automazione e Intelligenza Artificiale, trasformo idee complesse in ecosistemi digitali efficienti e scalabili.",
      stats: {
        projects: "8+",
        projectsLabel: "Progetti Principali",
        commitment: "100%",
        commitmentLabel: "Impegno"
      },
      buttons: {
        projects: "Vedi Progetti",
        contact: "Contattami"
      }
    },
    projects: {
      title: "Progetti in Evidenza",
      subtitle: "Una selezione di lavori recenti che spaziano da sistemi medici complessi a piattaforme di e-commerce.",
      list: getProjects('it'),
      viewDetails: "Vedi Dettagli",
      modal: {
        about: "Sul Progetto",
        responsive: "Viste Responsive",
        links: "Link",
        visit: "Visita Sito Web"
      }
    },
    about: {
      title: "Su di Me",
      intro: "Come Ingegnere di Sistemi, il mio approccio combina la solidità dello sviluppo software tradizionale con l'innovazione delle nuove tecnologie. Mi specializzo nella creazione di applicazioni web robuste e nella progettazione di architetture scalabili.",
      focus: "Attualmente, la mia carriera è fortemente incentrata sull'automazione dei processi e lo sviluppo di soluzioni con Inteligencia Artificiale. Aiuto aziende e organizzazioni a ottimizzare i flussi di lavoro, ridurre le attività ripetitive e integrare modelli AI per potenziare il processo decisionale e l'efficienza operativa.",
      skills: [
        { title: "AI & Automation", desc: "Integrazione LLM, n8n, Scripting Python, Chatbots" },
        { title: "Frontend Development", desc: "React, Tailwind CSS, HTML5, CSS3" },
        { title: "Backend Systems", desc: "Node.js, Python, REST APIs" },
        { title: "Database Management", desc: "PostgreSQL, MongoDB, MySQL" },
      ]
    },
    contact: {
      title: "Parliamo?",
      text: "Sono disponibile per potenziare la tua attività con soluzioni software su misura, automazioni e Intelligenza Artificiale.",
      whatsappBtn: "Contatta su WhatsApp",
      rights: "Tutti i diritti riservati."
    }
  }
};
