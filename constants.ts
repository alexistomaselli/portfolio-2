
import { UIContent, Project } from './types';

const COMMON_PROFILE = {
  name: "Alexis Tomaselli",
  email: "alexistomaselli@gmail.com",
  whatsapp: "543388430068",
  linkedin: "https://www.linkedin.com/in/alexis-tomaselli",
  avatarUrl: "/images/alexis-profile-round.png",
};

// --- HELPER TO GENERATE PROJECTS WITH TRANSLATED TEXTS ---
// This keeps image URLs and Tags consistent while changing descriptions

const getProjects = (lang: 'es' | 'en' | 'it'): Project[] => {
  const descriptions = {
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
    swiss: {
      es: 'Plataforma integral para gestión hospitalaria y presentación de servicios médicos. Optimizado para SEO y experiencia de usuario paciente.',
      en: 'Comprehensive platform for hospital management and medical services presentation. Optimized for SEO and patient UX.',
      it: 'Piattaforma completa per la gestione ospedaliera e la presentazione dei servizi medici. Ottimizzata per SEO e UX del paziente.'
    },
    dydia: {
      es: 'Empresa especializada en automatización de procesos e integración de Inteligencia Artificial. Soluciones tecnológicas para escalar negocios.',
      en: 'Company specialized in process automation and AI integration. Tech solutions to scale businesses.',
      it: 'Azienda specializzata nell\'automazione dei processi e integrazione di AI. Soluzioni tecnologiche per scalare il business.'
    },
    vinted: {
      es: 'Marketplace de moda de segunda mano. Implementación de carrito de compras, filtros avanzados y pasarela de pagos.',
      en: 'Second-hand fashion marketplace. Implementation of shopping cart, advanced filters, and payment gateway.',
      it: 'Marketplace di moda di seconda mano. Implementazione carrello, filtri avanzati e gateway di pagamento.'
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
    bomberos: {
      es: 'Sitio institucional para el cuerpo de bomberos. Sistema de noticias, alertas y recursos para la comunidad.',
      en: 'Institutional website for the fire department. News system, alerts, and community resources.',
      it: 'Sito istituzionale per i vigili del fuoco. Sistema di notizie, allerte e risorse per la comunità.'
    }
  };

  return [
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
      id: '9',
      name: 'Dydia Labs',
      slug: 'dydia-labs',
      description: descriptions.dydia[lang],
      url: 'https://dydialabs.tech/',
      tags: ['AI', 'Automation', 'Innovation'],
      category: 'corporate',
      imageUrl: 'https://dydialabs.tech/wp-content/uploads/2025/03/hero.webp',
    },
    {
      id: '1',
      name: 'Swiss Hospital',
      slug: 'swisshospital',
      description: descriptions.swiss[lang],
      url: 'https://www.swisshospital.mx',
      tags: ['React', 'Medical', 'Corporate'],
      category: 'medical',
      imageUrl: 'https://www.swisshospital.mx/wp-content/uploads/2023/04/swiss-home-slider-1-1024x682.jpg',
    },
    {
      id: '2',
      name: 'Vinted Clothes',
      slug: 'vinted-clone',
      description: descriptions.vinted[lang],
      url: 'https://vinted.mauroferrante.website',
      tags: ['E-commerce', 'Marketplace', 'Full Stack'],
      category: 'e-commerce',
      imageUrl: 'https://vinted.mauroferrante.website/wp-content/uploads/2023/05/77c49144ed9e862ef48349f4f217b48e.jpeg',
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
      name: 'Ferrara Ristrutturazioni',
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
    {
      id: '6',
      name: 'Bomberos Villegas',
      slug: 'bomberos',
      description: descriptions.bomberos[lang],
      url: 'https://bomberosvillegas.com.ar',
      tags: ['Government', 'News', 'Alerts'],
      category: 'corporate',
      imageUrl: 'https://bomberosvillegas.com.ar/wp-content/uploads/2019/01/cuartel3-1.png',
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
        projects: "7+",
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
        projects: "7+",
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
      about: "Ingegnere di Sistemi appassionato nella creazione di soluzioni tecnologiche ad alto impatto. Specializzato nello sviluppo Full-Stack, Automazione e Intelligenza Artificiale, trasformo idee complesse in ecosistemi digitali efficienti e scalabili.",
      stats: {
        projects: "7+",
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
      focus: "Attualmente, la mia carriera è fortemente incentrata sull'automazione dei processi e lo sviluppo di soluzioni con Intelligenza Artificiale. Aiuto aziende e organizzazioni a ottimizzare i flussi di lavoro, ridurre le attività ripetitive e integrare modelli AI per potenziare il processo decisionale e l'efficienza operativa.",
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
