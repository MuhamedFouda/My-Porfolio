export const cv = {
  /* ── Personal ─────────────────────────────────────────────── */
  name: "Muhamed Ahmed Fouda",
  title: "Front-End Developer",
  subtitle: "React.js & Next.js Specialist",
  bio: "Front-End Developer with 3+ years of experience building scalable, high-performance web applications using React.js, Redux, and modern frontend tools. Skilled in developing responsive, user-focused interfaces and integrating RESTful APIs. Proven ability to optimize performance, write clean maintainable code, and collaborate effectively within cross-functional teams.",
  location: "Egypt",
  email: "muhamedahmedfouda@gmail.com",
  phones: ["+20 155 206 5122", "+20 109 464 7112"],
  github: "https://github.com/MuhamedFouda",
  linkedin: "https://www.linkedin.com/in/muhamedfouda/",

  /* ── Skills ───────────────────────────────────────────────── */
  skills: {
    languagesAndFrameworks: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "JSX",
      "Sass",
      "Tailwind CSS",
      "Bootstrap",
    ],
    librariesAndTools: [
      "React.js",
      "Redux",
      "Redux Toolkit",
      "Context API",
      "React Router",
      "React Query",
      "Zustand",
      "GraphQL",
      "Apollo Client",
      "Axios",
      "Framer Motion",
      "Swiper.js",
      "MUI",
      "Ant Design",
      "Swagger",
    ],
    apisAndIntegration: [
      "RESTful APIs",
      "JSON Server",
      "Google Maps API",
      "JWT Authentication",
    ],
    versionControlAndOther: [
      "Git",
      "GitHub",
      "Vite",
      "Formik",
      "Yup",
      "React Hook Form",
      "Toastify",
      "Chart.js",
      "Recharts",
      "i18next",
    ],
  },

  /* ── Experience ────────────────────────────────────────────── */
  experience: [
    {
      role: "Front-End Developer",
      company: "Addicta",
      location: "Egypt",
      period: "Jan 2024 – Apr 2026",
      description:
        "Led front-end development across 8+ enterprise-grade projects including SaaS fitness platforms, admin dashboards, ERP systems, and yacht service management apps. Built scalable, modular architectures with React 18/19, TypeScript, and modern state management.",
      highlights: [
        "Built Peel Panel — a SaaS fitness dashboard with Admin & Coach panels using React 19, Zustand, and TanStack Query",
        "Developed Swyyp — a high-performance admin dashboard with RBAC, JWT auth, and real-time analytics",
        "Created Raalc — an enterprise ERP system for UAE court operations with full RTL Arabic support",
        "Built Marinoz — a yacht services platform using React 19, TypeScript, GraphQL (Apollo Client), and Redux Toolkit",
        "Developed Incompass & Edulink dashboards with complex data visualization and map integrations",
        "Implemented Bask Owner Dashboard & WebApp for property rentals with Firebase and Google Maps",
      ],
    },
    {
      role: "Front-End Developer",
      company: "EraaSoft",
      location: "Egypt",
      period: "Jan 2024 – Jun 2024",
      description:
        "Designed and developed interactive user interfaces using React.js. Created reusable components, integrated RESTful APIs, and collaborated closely with UI/UX designers and backend developers.",
      highlights: [
        "Designed and developed interactive user interfaces using React.js and related libraries",
        "Created reusable React components to enhance performance and maintain consistency",
        "Integrated frontend components with RESTful APIs using Axios",
        "Collaborated closely with UI/UX designers and backend developers for seamless integration",
      ],
    },
    {
      role: "Front-End Developer (Freelance)",
      company: "Nutrition WebApp",
      location: "Remote",
      period: "Oct 2023 – Jan 2024",
      description:
        "Built a personal website for a doctor featuring online booking and an admin page for reservations, with Google Maps integration and full responsiveness.",
      highlights: [
        "Built online booking and admin reservation system using React.js, Formik, Yup, and Toastify",
        "Integrated Google Maps for location searches and WhatsApp for communication",
        "Ensured full responsiveness across all devices",
      ],
    },
    {
      role: "Front-End Developer (Freelance)",
      company: "Twasol",
      location: "Remote",
      period: "Sep 2023 – Nov 2023",
      description:
        "Developed and maintained responsive interfaces with modern design practices, integrating features like Google Maps and contact functionality.",
      highlights: [
        "Developed responsive interfaces using React.js, HTML5, and CSS3",
        "Enhanced UX through modern design practices and visuals",
        "Integrated Google Maps, WhatsApp, and contact functionality",
      ],
    },
    {
      role: "Front-End Developer (Freelance)",
      company: "TruckLet",
      location: "Remote",
      period: "Jan 2023 – Sep 2023",
      description:
        "Worked with clients to meet project requirements and improve brand awareness through web presence.",
      highlights: [
        "Worked with clients to meet project requirements and desired functionality",
        "Improved brand awareness by contributing to the company's web presence",
      ],
    },
  ],

  /* ── Projects ──────────────────────────────────────────────── */
  projects: [
    {
      name: "Peel Panel – SaaS Fitness Dashboard",
      description:
        "A scalable SaaS fitness platform with Admin and Coach dashboards for managing workouts, nutrition plans, and client progress.",
      highlights: [
        "Built a scalable SaaS platform with Admin and Coach dashboards",
        "Implemented a modular feature-based architecture with secure JWT authentication",
        "Developed program builders, challenge systems, and analytics dashboards",
      ],
      tech: ["React 19", "Zustand", "TanStack Query", "Tailwind CSS", "Vite"],
      github: null,
      live: "https://peel-panel.addictaco.website/login",
    },
    {
      name: "Marinoz – Web App",
      description:
        "A customer-facing web application for booking yacht tours, luxury charters, and water sports.",
      highlights: [
        "Developed a responsive, user-friendly interface for seamless yacht service bookings",
        "Implemented high-performance front-end architecture using React 19 and TypeScript",
        "Managed complex GraphQL data fetching and caching with Apollo Client",
      ],
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Ant Design 5", "Redux Toolkit", "React Query", "GraphQL", "Apollo Client", "Vite"],
      github: null,
      live: "https://beta.marinoz.com/en",
    },
    {
      name: "Swyyp – Admin Dashboard",
      description:
        "A high-performance admin dashboard for managing users, vendors, subscriptions, and financial operations.",
      highlights: [
        "Implemented secure authentication with JWT refresh, session persistence, and controlled API retry logic",
        "Built a flexible Role-Based Access Control (RBAC) system for multi-level admin permissions",
        "Created financial and subscription management tools with real-time analytics dashboards",
        "Developed engagement features including vouchers, rewards, and gamified modules",
      ],
      tech: ["React 18", "Vite", "Tailwind CSS", "Ant Design", "Framer Motion"],
      github: null,
      live: null,
    },
    {
      name: "Raalc – Court ERP System (UAE)",
      description:
        "An enterprise-grade ERP system for UAE court and legal service operations with Admin and Vendor dashboards.",
      highlights: [
        "Developed an enterprise-grade ERP system for UAE court and legal service operations",
        "Built RBAC, audit logs, and full case, appointment, and financial management workflows",
        "Implemented analytics dashboards and a responsive UI with full RTL (Arabic) support",
      ],
      tech: ["React 19", "Vite", "Tailwind CSS", "MUI", "Recharts"],
      github: null,
      live: "null",
    },
    {
      name: "Bask Owner Dashboard",
      description:
        "A management system for property unit rentals and resales with real-time notifications, chat, and image uploads.",
      highlights: [
        "Built a management system for unit rentals and resales",
        "Integrated real-time notifications, chat, and image uploads",
        "Implemented Google Maps for location services",
      ],
      tech: ["React", "MUI", "Firebase", "Google Maps"],
      github: null,
      live: "https://owner.baskeg.com",
    },
    {
      name: "Bask WebApp",
      description:
        "A property unit viewing and booking application with real-time notifications and chat functionality.",
      highlights: [
        "Built a management system for unit view and booking",
        "Integrated real-time notifications and chat",
        "Powered by Firebase and Google Maps",
      ],
      tech: ["React", "MUI", "Firebase", "Google Maps"],
      github: null,
      live: "https://baskeg.com",
    },
    {
      name: "Marinoz – Admin Dashboard",
      description:
        "A comprehensive admin dashboard for managing yacht-related services, including tours, rentals, resales, luxury charters, and water sports.",
      highlights: [
        "Developed a comprehensive admin dashboard for yacht-related services",
        "Built modular, scalable components using React 19 and TypeScript for enterprise-grade applications",
        "Designed clean, responsive UIs with Ant Design and Tailwind CSS",
        "Managed complex API interactions via React Query and Apollo Client for smooth GraphQL data operations",
      ],
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Ant Design 5", "Redux Toolkit", "React Query", "GraphQL", "Apollo Client", "Vite"],
      github: null,
      live: null,
    },
    {
      name: "Marinoz – Owner Dashboard",
      description:
        "An owner-facing dashboard for yacht owners to manage their fleet, bookings, resales, and services effectively.",
      highlights: [
        "Built modular, scalable components using React 19 and TypeScript following best practices",
        "Designed clean, responsive UIs tailored for yacht owners ensuring high usability",
        "Integrated robust state management and API handling via Redux Toolkit and GraphQL",
      ],
      tech: ["React 19", "TypeScript", "Tailwind CSS", "Ant Design 5", "Redux Toolkit", "React Query", "GraphQL", "Apollo Client", "Vite"],
      github: null,
      live: "https://owner.marinoz.com",
    },
    {
      name: "Incompass Dashboard",
      description:
        "A scalable dashboard for managing complex business workflows with real-time data visualization.",
      highlights: [
        "Designed and implemented a scalable dashboard for complex business workflows",
        "Built real-time data visualization using Chart.js and MUI X-Charts",
        "Developed reusable, type-safe form components with React Hook Form and Yup validation",
        "Implemented advanced map features using react-google-maps for location-based data",
      ],
      tech: ["React 18.3", "MUI v6", "React Hook Form", "Redux Toolkit", "React Query", "TypeScript", "Vite", "Chart.js", "Google Maps API"],
      github: null,
      live: null,
    },
    {
      name: "Edulink Dashboard",
      description:
        "A user-friendly dashboard for searching and exploring international universities, academic programs, and admission options.",
      highlights: [
        "Developed a dashboard for searching international universities, programs, and admissions",
        "Created dynamic, responsive UI components using MUI and styled-components",
        "Implemented seamless navigation and filtering of universities and programs",
      ],
      tech: ["React 18.3", "MUI v5", "Redux Toolkit", "React Router v6", "Styled-Components", "React Hook Form", "i18next", "Recharts", "Bootstrap"],
      github: null,
      live: null,
    },
    {
      name: "Nutrition WebApp",
      description:
        "A personal website for a doctor featuring an online booking system and admin page for managing reservations.",
      highlights: [
        "Built online booking and admin reservation system",
        "Integrated Google Maps for location searches and WhatsApp for communication",
        "Ensured full responsiveness across all devices",
      ],
      tech: ["React.js", "Formik", "Yup", "Toastify", "Swiper.js", "Google Maps"],
      github: null,
      live: null,
    },
  ],

  /* ── Education ─────────────────────────────────────────────── */
  education: [
    {
      degree: "Bachelor of Business Administration",
      school: "Misr University — Information Systems",
      period: "2022",
      note: "GPA: 3.75/4.0 — Ranked 2nd in batch",
    },
  ],
} as const;
