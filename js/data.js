const portfolioData = {
    profile: {
        name: "Maken da Rosa",
        role: {
            en: "Full Stack Developer & AI Enthusiast",
            pt: "Desenvolvedor Full Stack & Entusiasta de IA"
        },
        summary: {
            en: "I am a Full Stack Developer focused on web applications and an Artificial Intelligence enthusiast. Currently working as a Software Developer at NEXTI, contributing to front-end refactoring and AI initiatives. I have experience with React, TypeScript, Python, and Java, always seeking continuous learning and professional evolution.",
            pt: "Sou um Desenvolvedor Full Stack focado em aplicações web e entusiasta de Inteligência Artificial. Atualmente atuo como Software Developer na NEXTI, contribuindo para refatoração de front-end e iniciativas de IA. Tenho experiência com React, TypeScript, Python e Java, sempre buscando aprendizado contínuo e evolução profissional."
        },
        location: "Brazil",
        social: {
            linkedin: "https://www.linkedin.com/in/maken-rosa",
            github: "https://github.com/makenrosa",
            email: "mailto:maken.cristhian@gmail.com"
        }
    },
    experience: [
        {
            company: "NEXTI",
            role: {
                en: "Full Stack Developer",
                pt: "Desenvolvedor Full Stack"
            },
            period: {
                en: "Apr 2025 – Present",
                pt: "Abr 2025 – Atual"
            },
            description: {
                en: "Full stack development, creating solutions and exploring artificial intelligence applications.",
                pt: "Atuação full stack, desenvolvendo soluções e explorando aplicações de inteligência artificial."
            }
        },
        {
            company: "NEXTI",
            role: {
                en: "Front-end Developer",
                pt: "Desenvolvedor Front-end"
            },
            period: {
                en: "Jan 2024 – Apr 2025",
                pt: "Jan 2024 – Abr 2025"
            },
            description: {
                en: "Development and maintenance of the design system in React, integrations, and module rewriting using TypeScript.",
                pt: "Desenvolvimento e manutenção do design system em React, integrações e reescrita de módulos utilizando TypeScript."
            }
        },
        {
            company: "NEXTI",
            role: {
                en: "Front-end Intern",
                pt: "Estagiário Front-end"
            },
            period: {
                en: "Apr 2023 – Jan 2024",
                pt: "Abr 2023 – Jan 2024"
            },
            description: {
                en: "Initial immersion in the development team, assisting with front-end tasks and learning the company's ecosystem.",
                pt: "Imersão inicial na equipe de desenvolvimento, auxiliando em tarefas de front-end e aprendendo o ecossistema da empresa."
            }
        },
        {
            company: "Arquivo Contábil",
            role: {
                en: "IT Intern",
                pt: "Estagiário de TI"
            },
            period: {
                en: "Dec 2021 – Jul 2022",
                pt: "Dez 2021 – Jul 2022"
            },
            description: {
                en: "Support in machine maintenance and development of Python solutions to optimize internal processes.",
                pt: "Suporte na manutenção de máquinas e desenvolvimento de soluções em Python para otimizar processos internos."
            }
        }
    ],
    projects: [
        {
            title: {
                en: "Operations Desk Refactor",
                pt: "Refatoração da Mesa de Operações"
            },
            description: {
                en: "Contributed to the rewrite of the 'Mesa de Operações' module for NEXTI, migrating the interface to React to improve performance and maintainability.",
                pt: "Participei da reescrita do módulo 'Mesa de Operações' da plataforma da NEXTI, migrando a interface para React a fim de melhorar a performance e a manutenibilidade."
            },
            tags: ["React", "TypeScript", "Node.js", "Legacy Migration"],
            link: null // Professional project, no link
        },
        {
            title: {
                en: "Level 1 AI Support",
                pt: "Atendimento IA Nível 1"
            },
            description: {
                en: "Fully developed the Level 1 AI support flow for NEXTI using OpenAI SDKs and AWS Infrastructure, achieving over 25% ticket resolution with a monthly cost under $15.",
                pt: "Desenvolvi integralmente o fluxo de atendimento com IA de nível 1 para a NEXTI utilizando SDKs da OpenAI e infraestrutura AWS, alcançando mais de 25% de resolução de chamados com um custo mensal inferior a 15 dólares."
            },
            tags: ["AI", "LLM", "Automation", "Python"],
            link: null // Professional project, no link
        },
        {
            title: {
                en: "makenrosa.site",
                pt: "makenrosa.site"
            },
            description: {
                en: "Personal website with utilities created to facilitate my daily tasks, including tools for both work and games.",
                pt: "Site pessoal onde criei algumas coisinhas utilitárias para facilitar meu dia a dia, incluindo ferramentas tanto para trabalho quanto para jogos."
            },
            tags: ["Web", "Utilities", "Personal"],
            link: "https://makenrosa.site/"
        }
    ],
    skills: [
        "JavaScript", "TypeScript", "Python", "Java",
        "React", "HTML5", "CSS3", "MySQL", "Node.js", "AWS",
        "Git", "GitHub", "AI Integration"
    ],
    education: [
        {
            institution: "Unisul",
            degree: {
                en: "Postgraduate in AI & Data Science",
                pt: "Pós-graduação em IA e Ciência de Dados"
            },
            period: {
                en: "Jan 2025 – Dec 2025",
                pt: "Jan 2025 – Dez 2025"
            },
            status: {
                en: "In Progress",
                pt: "Em Andamento"
            }
        },
        {
            institution: "Senac SC",
            degree: {
                en: "Systems Analysis and Development",
                pt: "Análise e Desenvolvimento de Sistemas"
            },
            period: {
                en: "Jul 2021 – Mar 2023",
                pt: "Jul 2021 – Mar 2023"
            },
            status: {
                en: "Completed",
                pt: "Concluído"
            }
        }
    ],
    certifications: [
        "Web Development (HTML5, CSS3, JS, PHP) - Curso em Vídeo",
        "Python Programming (World 1, 2, 3) - Curso em Vídeo",
        "IT Infrastructure (Hardware, Networks) - Curso em Vídeo"
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
            role_suffix: { en: "Full Stack Developer", pt: "Desenvolvedor Full Stack" },
            description: {
                en: "Full Stack Developer & AI Enthusiast building the future of web applications with modern technologies.",
                pt: "Desenvolvedor Full Stack & Entusiasta de IA construindo o futuro das aplicações web com tecnologias modernas."
            },
            view_work: { en: "View Work", pt: "Ver Projetos" },
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
