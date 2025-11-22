// State
let currentLang = 'pt'; // Default to Portuguese

// Helper to get text based on lang
const t = (obj) => obj[currentLang] || obj;

// Render Functions
const renderNav = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const keys = ['home', 'about', 'experience', 'projects', 'skills'];

    navLinks.forEach((link, index) => {
        if (keys[index]) {
            link.textContent = portfolioData.ui.nav[keys[index]][currentLang];
        }
    });

    const contactBtn = document.querySelector('nav .btn-primary');
    if (contactBtn) contactBtn.textContent = portfolioData.ui.nav.contact[currentLang];
};

const renderHero = () => {
    document.querySelector('#home h2').textContent = portfolioData.ui.hero.greeting[currentLang];
    document.querySelector('#home p').textContent = portfolioData.ui.hero.description[currentLang];

    const buttons = document.querySelectorAll('#home .btn');
    if (buttons.length >= 2) {
        buttons[0].textContent = portfolioData.ui.hero.view_work[currentLang];
        buttons[1].textContent = portfolioData.ui.hero.contact_me[currentLang];
    }
};

const renderSectionTitles = () => {
    document.querySelector('#about .section-title').textContent = portfolioData.ui.sections.about[currentLang];
    document.querySelector('#experience .section-title').textContent = portfolioData.ui.sections.experience[currentLang];
    document.querySelector('#projects .section-title').textContent = portfolioData.ui.sections.projects[currentLang];
    document.querySelector('#skills .section-title').textContent = portfolioData.ui.sections.skills[currentLang];
    document.querySelector('#education .section-title').textContent = portfolioData.ui.sections.education[currentLang];
    document.querySelector('#contact h2').textContent = portfolioData.ui.sections.contact[currentLang];
};

const renderAbout = () => {
    const aboutText = document.querySelector('#about p');
    if (aboutText) aboutText.textContent = t(portfolioData.profile.summary);

    // Update grid titles if needed (hardcoded icons + text in HTML, might need dynamic update if strictly translated)
    // For simplicity, we'll assume the icons are universal but text needs update
    const gridTitles = document.querySelectorAll('#about .grid-3 h3');
    if (gridTitles.length >= 3) {
        // These were hardcoded in HTML, let's make them dynamic or just keep English for "Full Stack" etc as they are technical terms often used in PT.
        // But user asked to translate everything.
        gridTitles[0].textContent = "Full Stack";
        gridTitles[1].textContent = currentLang === 'pt' ? "Integração de IA" : "AI Integration";
        gridTitles[2].textContent = "UI/UX Moderno";
    }
};

const renderExperience = () => {
    const container = document.getElementById('experience-container');
    if (!container) return;
    container.innerHTML = ''; // Clear for re-render

    portfolioData.experience.forEach((job, index) => {
        const item = document.createElement('div');
        item.className = `timeline-item ${index % 2 === 0 ? 'left' : 'right'} hidden show`; // Add show immediately if re-rendering
        item.innerHTML = `
            <div class="timeline-content">
                <h3>${t(job.role)}</h3>
                <h4 style="color: var(--primary-color); margin-bottom: 5px;">${job.company}</h4>
                <span style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 10px;">${t(job.period)}</span>
                <p>${t(job.description)}</p>
            </div>
        `;
        container.appendChild(item);
    });
};

const renderProjects = () => {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = '';

    if (portfolioData.projects.length === 0) {
        container.innerHTML = `<p style="text-align: center; grid-column: 1/-1; color: var(--text-secondary);">No projects to display.</p>`;
        return;
    }

    portfolioData.projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.className = 'card hidden show';

        const tagsHtml = project.tags.map(tag => `<span class="skill-tag" style="font-size: 0.75rem; padding: 4px 10px;">${tag}</span>`).join('');

        let linkHtml = '';
        if (project.link) {
            linkHtml = `<a href="${project.link}" target="_blank" class="btn-outline" style="padding: 8px 20px; font-size: 0.9rem;">${portfolioData.ui.buttons.view_project[currentLang]}</a>`;
        } else {
            linkHtml = `<span class="btn-outline" style="padding: 8px 20px; font-size: 0.9rem; opacity: 0.7; cursor: default; border-color: var(--text-secondary); color: var(--text-secondary);">${portfolioData.ui.buttons.private_project[currentLang]}</span>`;
        }

        card.innerHTML = `
            <h3 style="margin-bottom: 10px;">${t(project.title)}</h3>
            <p style="margin-bottom: 15px; color: var(--text-secondary); font-size: 0.95rem;">${t(project.description)}</p>
            <div style="margin-bottom: 20px;">${tagsHtml}</div>
            <div style="margin-top: auto;">${linkHtml}</div>
        `;
        container.appendChild(card);
    });
};

const renderSkills = () => {
    const container = document.getElementById('skills-container');
    if (!container || container.children.length > 0) return; // Only render once as skills are just strings

    portfolioData.skills.forEach((skill, index) => {
        const tag = document.createElement('span');
        tag.className = 'skill-tag hidden';
        tag.style.transitionDelay = `${index * 50}ms`;
        tag.textContent = skill;
        container.appendChild(tag);
    });
};

const renderEducation = () => {
    const container = document.getElementById('education-container');
    if (!container) return;
    container.innerHTML = '';

    portfolioData.education.forEach((edu, index) => {
        const card = document.createElement('div');
        card.className = 'card hidden show';
        card.innerHTML = `
            <h3>${t(edu.degree)}</h3>
            <h4 style="color: var(--primary-color);">${edu.institution}</h4>
            <span style="color: var(--text-secondary);">${t(edu.period)} • ${t(edu.status)}</span>
        `;
        container.appendChild(card);
    });
};

const renderFooter = () => {
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        footerText.innerHTML = `&copy; 2025 Maken Rosa. ${portfolioData.ui.footer.text[currentLang]} <i class="fas fa-heart" style="color: var(--accent-color);"></i> ${currentLang === 'pt' ? 'e Código' : 'and Code'}.`;
    }

    // Update social links
    const socialLinks = document.querySelectorAll('.social-links a');
    if (socialLinks.length >= 3) {
        socialLinks[0].href = portfolioData.profile.social.linkedin;
        socialLinks[1].href = portfolioData.profile.social.github;
        socialLinks[2].href = portfolioData.profile.social.email;
    }
}

const updateLanguage = (lang) => {
    currentLang = lang;
    renderNav();
    renderHero();
    renderSectionTitles();
    renderAbout();
    renderExperience();
    renderProjects();
    renderEducation();
    renderFooter();

    // Update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderNav();
    renderHero();
    renderSectionTitles();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    renderFooter();

    // Language Toggle Event Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.dataset.lang);
        });
    });
});
