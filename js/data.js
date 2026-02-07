const portfolioData = {
    profile: {
        name: "Maken da Rosa",
        role: {
            en: "Full-stack Developer + AI | LLM/RAG, AWS, React/TypeScript",
            pt: "Desenvolvedor Full-stack + IA | LLM/RAG, AWS, React/TypeScript"
        },
        summary: {
            en: "Technology has always been the thread of my journey, from tinkering with computers to building scalable web and AI solutions. At NEXTI, I evolved from front-end intern to software developer. I delivered an AI Level 1 support assistant that can resolve up to 50% of tickets before human support, while keeping inference cost under US$15/month.",
            pt: "Tecnologia sempre foi o fio condutor da minha jornada, desde explorar computadores ate construir solucoes web e IA escalaveis. Na NEXTI, evolui de estagiario front-end para software developer. Entreguei um assistente de suporte IA nivel 1 capaz de resolver ate 50% dos chamados antes do atendimento humano, mantendo custo de inferencia abaixo de US$15/mes."
        },
        location: "Sao Jose, SC - Brazil",
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
                en: "Implemented an AI-powered L1 support assistant for hundreds of clients, automating around 50% of tickets before human support. Built ingestion, classification, and summarization pipelines using AWS Bedrock, Pinecone, Lambda, Step Functions, SAM, and Jenkins.",
                pt: "Implementei um assistente de suporte L1 com IA para centenas de clientes, automatizando cerca de 50% dos chamados antes do atendimento humano. Construi pipelines de ingestao, classificacao e sumarizacao com AWS Bedrock, Pinecone, Lambda, Step Functions, SAM e Jenkins."
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
                en: "Rewrote a critical AngularJS module into a modular React/TypeScript solution with lazy loading, improving time-to-interaction by over 80% and reaching over 80% unit-test coverage. Worked with design system components and BFF integration.",
                pt: "Reescrevi um modulo critico em AngularJS para uma solucao modular React/TypeScript com lazy loading, melhorando o time-to-interaction em mais de 80% e alcancando mais de 80% de cobertura de testes unitarios. Atuei com componentes de design system e integracao via BFF."
            }
        },
        {
            company: "NEXTI",
            role: {
                en: "Front-end Development Intern",
                pt: "Estagiario de Desenvolvimento Front-end"
            },
            period: {
                en: "Apr 2023 - Dec 2023",
                pt: "Abr 2023 - Dez 2023"
            },
            description: {
                en: "Supported front-end feature development and maintenance, componentization, automated tests, and Kanban-based delivery in the product team.",
                pt: "Apoiei desenvolvimento e manutencao de features front-end, componentizacao, testes automatizados e entregas com metodologia Kanban no time de produto."
            }
        },
        {
            company: "Arquivo Contabil",
            role: {
                en: "IT Intern",
                pt: "Estagiario de TI"
            },
            period: {
                en: "Dec 2021 - Jul 2022",
                pt: "Dez 2021 - Jul 2022"
            },
            description: {
                en: "Performed preventive maintenance and delivered internal task-management tooling.",
                pt: "Atuei com manutencao preventiva e desenvolvimento de ferramentas internas de gerenciamento de tarefas."
            }
        }
    ],
    projects: [
        {
            title: {
                en: "Operations Desk Refactor",
                pt: "Refatoracao da Mesa de Operacoes"
            },
            description: {
                en: "Migration of a legacy AngularJS module to React/TypeScript with modular architecture and lazy loading, improving user-perceived performance and maintainability.",
                pt: "Migracao de um modulo legado em AngularJS para React/TypeScript com arquitetura modular e lazy loading, melhorando performance percebida e manutenibilidade."
            },
            tags: ["React", "TypeScript", "BFF", "Legacy Migration"],
            link: null
        },
        {
            title: {
                en: "AI Level 1 Support Assistant",
                pt: "Assistente IA de Suporte Nivel 1"
            },
            description: {
                en: "Designed and delivered an AI support flow that resolves up to 50% of tickets before human escalation, with monthly inference cost below US$15.",
                pt: "Desenhei e entreguei um fluxo de suporte com IA que resolve ate 50% dos chamados antes de escalar para humano, com custo de inferencia mensal abaixo de US$15."
            },
            tags: ["LLM", "RAG", "AWS Bedrock", "Pinecone", "Lambda"],
            link: null
        },
        {
            title: {
                en: "Professional Portfolio Hub",
                pt: "Hub Profissional de Portfolio"
            },
            description: {
                en: "Centralized portfolio that presents experience, impact metrics, and curated project cases.",
                pt: "Portfolio centralizado que apresenta experiencia, metricas de impacto e casos de projeto curados."
            },
            tags: ["Portfolio", "Web", "Branding"],
            link: "https://makenrosa.github.io/"
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
                pt: "Pos-graduacao (modulos de IA e dados)"
            },
            period: {
                en: "Jan 2025 - Dec 2025",
                pt: "Jan 2025 - Dez 2025"
            },
            status: {
                en: "Completed",
                pt: "Concluido"
            }
        },
        {
            institution: "Senac Santa Catarina",
            degree: {
                en: "CST in Systems Analysis and Development",
                pt: "CST em Analise e Desenvolvimento de Sistemas"
            },
            period: {
                en: "2022 - 2023",
                pt: "2022 - 2023"
            },
            status: {
                en: "Completed",
                pt: "Concluido"
            }
        }
    ],
    certifications: [
        "MCP na Pratica: Crie Agentes e Multi-Agentes com LLMs - Udemy",
        "AI Automation: Build LLM Apps and AI-Agents with n8n and APIs - Udemy",
        "LangChain: Crie agents com Rag e IA Generativa - Udemy",
        "Engenharia, Preparacao e Visualizacao de Dados - UNISUL",
        "React JS: testes com Jest e Testing Library - Alura",
        "Docker: criando e gerenciando containers - Alura"
    ],
    ui: {
        nav: {
            home: { en: "Home", pt: "Inicio" },
            about: { en: "About", pt: "Sobre" },
            experience: { en: "Experience", pt: "Experiencia" },
            projects: { en: "Projects", pt: "Projetos" },
            skills: { en: "Skills", pt: "Habilidades" },
            contact: { en: "Contact", pt: "Contato" }
        },
        hero: {
            greeting: { en: "Hello, I'm", pt: "Ola, eu sou" },
            role_suffix: { en: "Full-stack Developer + AI", pt: "Desenvolvedor Full-stack + IA" },
            description: {
                en: "I deliver scalable web and AI solutions with measurable impact on product performance and support operations.",
                pt: "Entrego solucoes web e IA escalaveis com impacto mensuravel em performance de produto e operacao de suporte."
            },
            view_work: { en: "View Projects", pt: "Ver Projetos" },
            contact_me: { en: "Contact Me", pt: "Me Contate" }
        },
        sections: {
            about: { en: "About Me", pt: "Sobre Mim" },
            experience: { en: "Experience", pt: "Experiencia" },
            projects: { en: "Projects", pt: "Projetos" },
            skills: { en: "Skills & Technologies", pt: "Habilidades & Tecnologias" },
            education: { en: "Education", pt: "Formacao" },
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
