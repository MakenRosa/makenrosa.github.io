const portfolioData = {
    profile: {
        name: "Maken da Rosa",
        role: {
            en: "Full-stack Developer + AI | LLM/RAG, AWS, React/TypeScript",
            pt: "Desenvolvedor Full-stack + IA | LLM/RAG, AWS, React/TypeScript"
        },
        summary: {
            en: "I work on frontend development, API integration, and practical AI applications. My portfolio presents technical contributions and general engineering concepts while keeping company information private.",
            pt: "Atuo com desenvolvimento frontend, integração de APIs e aplicações práticas de IA. Meu portfólio apresenta contribuições técnicas e conceitos gerais de engenharia, preservando informações das empresas."
        },
        location: "São José, SC - Brasil",
        social: {
            linkedin: "https://www.linkedin.com/in/maken-da-rosa/",
            github: "https://github.com/MakenRosa",
            email: "mailto:maken.cristhian@gmail.com"
        }
    },
    experience: [
        {
            company: "NEXTI",
            role: {
                en: "Software Developer",
                pt: "Software Developer"
            },
            period: {
                en: "Jan 2025 - Present",
                pt: "Jan 2025 - Atual"
            },
            description: {
                en: "Contributed with a team to the evolution of an existing AI solution, including Python integrations, content preparation for retrieval, integration with an existing user flow, and usage-follow-up features.",
                pt: "Participei com o time da evolução de uma solução de IA existente, incluindo integrações em Python, preparação de conteúdo para recuperação de informação, integração ao fluxo de uso e recursos de acompanhamento."
            }
        },
        {
            company: "NEXTI",
            role: {
                en: "Front-end Developer",
                pt: "Desenvolvedor Front-end"
            },
            period: {
                en: "Jan 2024 - Jan 2025",
                pt: "Jan 2024 - Jan 2025"
            },
            description: {
                en: "Developed React/TypeScript components and screens, Node.js BFF endpoints, validation and response shaping, and integration between the frontend and APIs.",
                pt: "Desenvolvi componentes e telas em React/TypeScript, endpoints BFF em Node.js, validações e adaptação de respostas, além da integração entre frontend e APIs."
            }
        },
        {
            company: "NEXTI",
            role: {
                en: "Front-end Development Intern",
                pt: "Estagiário de Desenvolvimento Front-end"
            },
            period: {
                en: "Apr 2023 - Dec 2023",
                pt: "Abr 2023 - Dez 2023"
            },
            description: {
                en: "Supported front-end feature development and maintenance, componentization, automated tests, and Kanban-based delivery in the product team.",
                pt: "Apoiei desenvolvimento e manutenção de features front-end, componentização, testes automatizados e entregas com metodologia Kanban no time de produto."
            }
        },
        {
            company: "Arquivo Contábil",
            role: {
                en: "IT Intern",
                pt: "Estagiário de TI"
            },
            period: {
                en: "Dec 2021 - Jul 2022",
                pt: "Dez 2021 - Jul 2022"
            },
            description: {
                en: "Performed preventive maintenance and delivered internal task-management tooling.",
                pt: "Atuei com manutenção preventiva e desenvolvimento de ferramentas internas de gerenciamento de tarefas."
            }
        }
    ],
    projects: [
        {
            "title": {
                "en": "Room Planner",
                "pt": "Planejador de Cômodos"
            },
            "description": {
                "en": "3D furniture planning from RoomPlan scans, with room assembly, parametric furniture, and a public demo using a fictional apartment.",
                "pt": "Planejamento de móveis em 3D a partir de scans do RoomPlan, com montagem de cômodos, móveis paramétricos e demo com apartamento fictício."
            },
            "tags": [
                "React",
                "TypeScript",
                "Three.js",
                "Vitest"
            ],
            "link": "https://github.com/MakenRosa/planejador-comodos"
        },
        {
            "title": {
                "en": "Apura Brasil",
                "pt": "Apura Brasil"
            },
            "description": {
                "en": "Local election dashboard with official TSE and IBGE data, SVG maps, caching, and tests using stored source snapshots.",
                "pt": "Painel eleitoral local com dados oficiais do TSE e IBGE, mapas SVG, cache e testes com capturas das fontes."
            },
            "tags": [
                "React",
                "TypeScript",
                "Node.js",
                "Data"
            ],
            "link": "https://github.com/MakenRosa/apura-brasil"
        },
        {
            "title": {
                "en": "Fólio",
                "pt": "Fólio"
            },
            "description": {
                "en": "Windows PDF reader with a local library, duplicate detection, and reading progress. The repository documents validation results and the current CI limitation.",
                "pt": "Leitor de PDF para Windows com biblioteca local, deduplicação e retomada de leitura. O repositório documenta os testes e a limitação atual da CI."
            },
            "tags": [
                "Tauri",
                "Rust",
                "TypeScript",
                "PDF.js"
            ],
            "link": "https://github.com/MakenRosa/folio"
        },
        {
            "title": {
                "en": "TermoTV",
                "pt": "TermoTV"
            },
            "description": {
                "en": "Offline word game for LG webOS TVs, with remote-control navigation, deterministic daily selection, and local progress persistence.",
                "pt": "Jogo de palavras offline para TVs LG webOS, com navegação por controle remoto, seleção diária determinística e progresso local."
            },
            "tags": [
                "JavaScript",
                "webOS",
                "Offline",
                "Tests"
            ],
            "link": "https://github.com/MakenRosa/lg-termo"
        }
    ],
    skills: [
        "React", "TypeScript", "JavaScript", "Python", "Java",
        "AWS Bedrock", "RAG", "Pinecone", "Lambda", "Step Functions",
        "Jenkins", "Docker", "PostgreSQL", "MySQL"
    ],
    education: [
        {
            institution: "Universidade do Sul de Santa Catarina (UNISUL)",
            degree: {
                en: "Postgraduate Certificate (AI and Data-related modules)",
                pt: "Pós-graduação (módulos de IA e dados)"
            },
            period: {
                en: "Jan 2025 - Dec 2025",
                pt: "Jan 2025 - Dez 2025"
            },
            status: {
                en: "Completed",
                pt: "Concluído"
            }
        },
        {
            institution: "Senac Santa Catarina",
            degree: {
                en: "CST in Systems Analysis and Development",
                pt: "CST em Análise e Desenvolvimento de Sistemas"
            },
            period: {
                en: "2022 - 2023",
                pt: "2022 - 2023"
            },
            status: {
                en: "Completed",
                pt: "Concluído"
            }
        }
    ],
    certifications: [
        "MCP na Prática: Crie Agentes e Multi-Agentes com LLMs - Udemy",
        "AI Automation: Build LLM Apps and AI-Agents with n8n and APIs - Udemy",
        "LangChain: Crie agents com RAG e IA Generativa - Udemy",
        "Engenharia, Preparação e Visualização de Dados - UNISUL",
        "React JS: testes com Jest e Testing Library - Alura",
        "Docker: criando e gerenciando containers - Alura"
    ],
    ui: {
        nav: {
            home: { en: "Home", pt: "Início" },
            about: { en: "About", pt: "Sobre" },
            experience: { en: "Experience", pt: "Experiência" },
            projects: { en: "Projects", pt: "Projetos" },
            skills: { en: "Skills", pt: "Habilidades" },
            contact: { en: "Contact", pt: "Contato" }
        },
        hero: {
            greeting: { en: "Hello, I'm", pt: "Olá, eu sou" },
            role_suffix: { en: "Full-stack Developer + AI", pt: "Desenvolvedor Full-stack + IA" },
            description: {
                en: "I deliver scalable web and AI solutions with measurable impact on product performance and support operations.",
                pt: "Entrego soluções web e IA escaláveis com impacto mensurável em performance de produto e operação de suporte."
            },
            view_work: { en: "View Projects", pt: "Ver Projetos" },
            contact_me: { en: "Contact Me", pt: "Me Contate" }
        },
        sections: {
            about: { en: "About Me", pt: "Sobre Mim" },
            experience: { en: "Experience", pt: "Experiência" },
            projects: { en: "Projects", pt: "Projetos" },
            skills: { en: "Skills & Technologies", pt: "Habilidades & Tecnologias" },
            education: { en: "Education", pt: "Formação" },
            contact: { en: "Let's Connect", pt: "Vamos Conversar" }
        },
        footer: {
            text: { en: "Built with", pt: "Feito com" }
        },
        buttons: {
            view_project: { en: "View Project", pt: "Ver Projeto" },
            private_project: { en: "Professional Project", pt: "Projeto Profissional" }
        }
    }
};

