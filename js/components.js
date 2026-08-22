// Icons helper object providing inline SVG strings
const Icons = {
  powerbi: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="12" width="4" height="9" rx="1"/><rect x="10" y="7" width="4" height="14" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/></svg>`,
  sql: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>`,
  python: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 6 4.5 6 4.5V8h6v2H4.5S2 9.5 2 15s2.5 5.5 2.5 5.5H8V17a3 3 0 0 1 3-3h6a3 3 0 0 0 3-3V4.5S20 2 14.5 2H12z"/><path d="M12 22c5.52 0 6-2.5 6-2.5V16h-6v-2h7.5s2.5.5 2.5-5-2.5-5.5-2.5-5.5H16V7a3 3 0 0 1-3 3H7a3 3 0 0 0-3 3v6.5S4 22 9.5 22H12z"/><circle cx="9" cy="5.5" r="0.75" fill="currentColor"/><circle cx="15" cy="18.5" r="0.75" fill="currentColor"/></svg>`,
  excel: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="17"/><line x1="16" y1="13" x2="8" y2="17"/></svg>`,
  code: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  users: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
  github: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowUpRight: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`,
  award: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  trophy: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8v4h8v-4h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M18 4H6v7a6 6 0 0 0 12 0V4z"/></svg>`,
  scroll: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 17V5a2 2 0 0 0-2-2H4"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>`,
  close: `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  check: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  download: `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`
};

const Components = {
  // Navigation
  renderNavigation(data) {
    const navItems = [
      { label: "HOME", href: "#home" },
      { label: "ABOUT", href: "#about" },
      { label: "EDUCATION", href: "#education" },
      { label: "EXPERIENCE", href: "#experience" },
      { label: "PROJECTS", href: "#projects" },
      { label: "CERTIFICATIONS", href: "#certifications" },
      { label: "EXTRA-CURRICULAR", href: "#extracurricular" },
      { label: "CONTACT", href: "#contact" }
    ];

    const linksHtml = navItems
      .map(
        item => `
      <li class="nav-item">
        <a href="${item.href}" class="nav-link">${item.label}</a>
      </li>`
      )
      .join("");

    return `
      <header class="site-header" id="siteHeader">
        <div class="scroll-progress-container" aria-hidden="true">
          <div class="scroll-progress-bar" id="scrollProgressBar"></div>
        </div>
        <div class="nav-container">
          <a href="#home" class="brand-logo" aria-label="${data.personal.name} Portfolio">
            <span class="monogram">${data.personal.monogram}</span>
            <div class="brand-text">
              <span class="brand-name">${data.personal.name}</span>
              <span class="blinking-tag">PORTFOLIO</span>
            </div>
          </a>

          <nav class="desktop-nav" aria-label="Main Navigation">
            <ul class="nav-list">
              ${linksHtml}
            </ul>
          </nav>

          <div class="nav-actions">
            <a href="#contact" class="btn btn-outline btn-sm nav-cta">Let's Talk</a>
            <button class="hamburger-btn" id="hamburgerBtn" aria-label="Toggle navigation menu" aria-expanded="false">
              <span class="hamburger-bar"></span>
              <span class="hamburger-bar"></span>
              <span class="hamburger-bar"></span>
            </button>
          </div>
        </div>

        <div class="mobile-drawer" id="mobileDrawer" aria-hidden="true">
          <div class="mobile-drawer-header">
            <div class="brand-text">
              <span class="monogram">${data.personal.monogram}</span>
              <span class="brand-name">${data.personal.name}</span>
            </div>
            <button class="drawer-close-btn" id="drawerCloseBtn" aria-label="Close menu">
              ${Icons.close}
            </button>
          </div>
          <nav class="mobile-nav" aria-label="Mobile Navigation">
            <ul class="mobile-nav-list">
              ${linksHtml}
            </ul>
          </nav>
          <div class="mobile-drawer-footer">
            <a href="#contact" class="btn btn-primary btn-block mobile-cta">Connect with Me</a>
          </div>
        </div>
        <div class="mobile-backdrop" id="mobileBackdrop"></div>
      </header>
    `;
  },

  // Hero Section
  renderHero(data) {
    const statsHtml = data.personal.heroStats
      .map(
        stat => `
      <div class="hero-stat-card">
        <div class="stat-number-wrapper">
          <span class="stat-number count-up" data-target="${stat.value}">${stat.value}</span>
          <span class="stat-suffix">${stat.suffix}</span>
        </div>
        <div class="stat-label">${stat.label}</div>
      </div>`
      )
      .join("");

    return `
      <section class="hero-section section-padding" id="home">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="hero-eyebrow">
              <span class="terminal-dot"></span>
              <span class="eyebrow-text">HELLO, I'M</span>
            </div>
            <h1 class="hero-title hero-title-bold">${data.personal.name}</h1>
            <div class="hero-headline">
              <span class="headline-text">${data.personal.role}</span>
            </div>
            <p class="hero-description">
              MBA Business Analytics student dedicated to turning enterprise and operational datasets into strategic decisions, measurable efficiency, and high-impact business outcomes.
            </p>

            <div class="hero-cta-group">
              <a href="#projects" class="btn btn-primary">
                <span>View Projects</span>
                ${Icons.arrowRight}
              </a>
              <a href="#experience" class="btn btn-outline">
                <span>Internship Experience</span>
              </a>
            </div>

            <div class="hero-stats-row">
              ${statsHtml}
            </div>
          </div>

          <div class="hero-visual">
            <div class="profile-card-wrapper">
              <div class="profile-executive-card">
                <div class="card-inner-glow"></div>
                <div class="profile-avatar">
                  <span class="avatar-initials">${data.personal.monogram}</span>
                </div>
                <div class="profile-meta">
                  <h3 class="profile-name">${data.personal.name}</h3>
                  <div class="profile-badge">MBA BUSINESS ANALYTICS</div>
                  <div class="profile-subtag">BUSINESS ANALYST</div>
                </div>
                <div class="profile-divider"></div>
                <div class="profile-quick-details">
                  <div class="detail-row">
                    <span class="detail-label">CORE FOCUS:</span>
                    <span class="detail-val">Data Storytelling & BI</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">METHODOLOGY:</span>
                    <span class="detail-val">Exploratory & Predictive</span>
                  </div>
                  <div class="detail-row">
                    <span class="detail-label">STATUS:</span>
                    <span class="detail-val status-active">Open for BA Opportunities</span>
                  </div>
                </div>
              </div>

              <!-- Floating Badges -->
              <div class="floating-badge badge-powerbi" data-float="1">
                <span class="badge-icon">${Icons.powerbi}</span>
                <span class="badge-title">POWER BI</span>
              </div>
              <div class="floating-badge badge-sql" data-float="2">
                <span class="badge-icon">${Icons.sql}</span>
                <span class="badge-title">SQL</span>
              </div>
              <div class="floating-badge badge-python" data-float="3">
                <span class="badge-icon">${Icons.python}</span>
                <span class="badge-title">PYTHON</span>
              </div>
              <div class="floating-badge badge-excel" data-float="4">
                <span class="badge-icon">${Icons.excel}</span>
                <span class="badge-title">EXCEL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // About Section
  renderAbout(data) {
    const categoriesHtml = data.skills.categories
      .map(
        cat => `
      <div class="skill-category-card">
        <div class="category-header">
          <span class="category-icon">${Icons[cat.icon] || Icons.code}</span>
          <h4 class="category-title">${cat.title}</h4>
        </div>
        <div class="skill-chips-container">
          ${cat.items.map(item => `<span class="skill-chip">${item}</span>`).join("")}
        </div>
      </div>`
      )
      .join("");

    return `
      <section class="about-section section-padding" id="about">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">${data.about.tag}</span>
            <h2 class="section-title">${data.about.heading}</h2>
            <p class="section-subtitle">${data.about.subtitle}</p>
          </div>

          <div class="about-grid">
            <div class="about-narrative-card">
              <h3 class="narrative-heading">Analytical Rigor Meets Strategic Business Acumen</h3>
              <p class="narrative-body">${data.about.summary.replace(/\n\n/g, "</p><p class='narrative-body'>")}</p>
              
              <div class="about-highlights-list">
                ${data.about.highlights
                  .map(
                    h => `
                  <div class="highlight-item">
                    <span class="highlight-bullet">${Icons.check}</span>
                    <span class="highlight-text">${h}</span>
                  </div>`
                  )
                  .join("")}
              </div>

              <div class="about-footer-cta">
                <a href="#contact" class="btn btn-outline btn-sm">
                  <span>Get in Touch</span>
                  ${Icons.arrowRight}
                </a>
              </div>
            </div>

            <div class="about-skills-wrapper">
              ${categoriesHtml}
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Education Section
  renderEducation(data) {
    const timelineItems = data.education
      .map(
        (edu, index) => `
      <div class="timeline-item" tabindex="0" data-education-index="${index}">
        <div class="timeline-marker">
          <span class="marker-dot"></span>
          <span class="marker-line"></span>
        </div>
        <div class="timeline-card">
          <div class="timeline-header">
            <div class="timeline-degree-row">
              <h3 class="timeline-degree">${edu.degree}</h3>
              <span class="timeline-badge">${edu.status}</span>
            </div>
            <div class="timeline-institution">${edu.institution} &bull; <span class="timeline-loc">${edu.location}</span></div>
            <div class="timeline-meta-row">
              <span class="timeline-duration">${edu.duration}</span>
              <span class="timeline-grade">${edu.grade}</span>
            </div>
          </div>
          <p class="timeline-details">${edu.details}</p>
        </div>
      </div>`
      )
      .join("");

    return `
      <section class="education-section section-padding" id="education">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">02. ACADEMIC BACKGROUND</span>
            <h2 class="section-title">Education</h2>
            <p class="section-subtitle">Strong educational roots merging commerce discipline with modern business analytics.</p>
          </div>

          <div class="education-timeline">
            ${timelineItems}
          </div>
        </div>
      </section>
    `;
  },

  // Experience Section
  renderExperience(data) {
    const exp = data.experience[0];
    const kpiCardsHtml = exp.kpis
      .map(
        kpi => `
      <div class="kpi-metric-card">
        <div class="kpi-number-wrap">
          <span class="kpi-value count-up" data-target="${kpi.value}">${kpi.value}</span>
          <span class="kpi-suffix">${kpi.suffix}</span>
        </div>
        <div class="kpi-label">${kpi.label}</div>
      </div>`
      )
      .join("");

    const responsibilitiesHtml = exp.responsibilities
      .map(
        r => `
      <li class="resp-item">
        <span class="resp-icon">${Icons.check}</span>
        <span class="resp-text">${r}</span>
      </li>`
      )
      .join("");

    return `
      <section class="experience-section section-padding" id="experience">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">03. INDUSTRY EXPERIENCE</span>
            <h2 class="section-title">Professional Experience</h2>
            <p class="section-subtitle">Real-world operational diagnostics, funnel analytics, and data-driven recommendations.</p>
          </div>

          <div class="experience-showcase-card">
            <div class="exp-header">
              <div class="exp-title-block">
                <div class="exp-role-badge">${exp.type.toUpperCase()}</div>
                <h3 class="exp-role">${exp.role}</h3>
                <div class="exp-company-row">
                  <span class="exp-company">${exp.company}</span>
                  <span class="exp-dot">&bull;</span>
                  <span class="exp-loc">${exp.location}</span>
                </div>
              </div>
              <div class="exp-meta-block">
                <span class="exp-duration-tag">${exp.duration}</span>
              </div>
            </div>

            <p class="exp-summary">${exp.description}</p>

            <div class="experience-kpis-grid">
              ${kpiCardsHtml}
            </div>

            <div class="exp-details-block">
              <h4 class="details-heading">KEY CONTRIBUTIONS & RESPONSIBILITIES</h4>
              <ul class="resp-list">
                ${responsibilitiesHtml}
              </ul>
            </div>

            <div class="exp-actions">
              <button class="btn btn-primary btn-sm modal-trigger" data-modal="certificateModal">
                <span>View Internship Certificate</span>
                ${Icons.award}
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Internship Projects
  renderInternshipProjects(data) {
    const projectsHtml = data.internshipProjects
      .map(
        p => `
      <div class="internship-project-card">
        <div class="intern-proj-header">
          <span class="intern-proj-cat">${p.category}</span>
          <h3 class="intern-proj-title">${p.title}</h3>
          <span class="intern-proj-org">Organization: ${p.organization}</span>
        </div>

        <div class="intern-proj-structured-grid">
          <div class="proj-struct-block struct-problem">
            <div class="struct-title">PROBLEM</div>
            <p class="struct-desc">${p.problem}</p>
          </div>
          <div class="proj-struct-block struct-approach">
            <div class="struct-title">APPROACH</div>
            <p class="struct-desc">${p.approach}</p>
          </div>
          <div class="proj-struct-block struct-insight">
            <div class="struct-title">INSIGHT</div>
            <p class="struct-desc">${p.insight}</p>
          </div>
          <div class="proj-struct-block struct-impact">
            <div class="struct-title">BUSINESS IMPACT</div>
            <p class="struct-desc">${p.businessImpact}</p>
          </div>
        </div>

        <div class="intern-proj-footer">
          <span class="tools-label">TOOLS / METHODS:</span>
          <div class="tools-tags-row">
            ${p.tools.map(t => `<span class="tool-tag">${t}</span>`).join("")}
          </div>
        </div>
      </div>`
      )
      .join("");

    return `
      <section class="internship-projects-section section-padding" id="internship-projects">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">04. PRACTICUM & INTERNSHIP PROJECTS</span>
            <h2 class="section-title">Internship Projects</h2>
            <p class="section-subtitle">Structured problem-solving frameworks applied during healthcare operational analytics engagements.</p>
          </div>

          <div class="internship-projects-container">
            ${projectsHtml}
          </div>
        </div>
      </section>
    `;
  },

  // Featured Projects Carousel (Single Project Centered at a Time)
  renderFeaturedProjects(data) {
    const totalProjects = data.featuredProjects.length;
    const slidesHtml = data.featuredProjects
      .map((proj, index) => {
        const currentNum = String(index + 1).padStart(2, "0");
        const totalNum = String(totalProjects).padStart(2, "0");
        const bulletsHtml = proj.bullets
          .map(
            b => `
          <li class="proj-bullet-item">
            <span class="proj-bullet-icon">${Icons.check}</span>
            <span class="proj-bullet-text">${b}</span>
          </li>`
          )
          .join("");

        return `
        <div class="carousel-slide" data-index="${index}">
          <div class="project-featured-card single-project-card">
            <div class="proj-top-bar">
              <div class="proj-category-pill">${proj.category}</div>
              <div class="proj-index-tag">PROJECT ${currentNum} / ${totalNum}</div>
            </div>

            <h3 class="proj-main-title">${proj.title}</h3>
            
            <div class="proj-date-row">
              <span class="proj-date-badge">${Icons.calendar} ${proj.date}</span>
            </div>

            <div class="proj-description-block">
              <ul class="proj-bullet-list">
                ${bulletsHtml}
              </ul>
            </div>

            <div class="proj-card-footer">
              <div class="proj-tools-group">
                <span class="tools-inline-label">Tools:</span>
                ${proj.tools.map(t => `<span class="tool-badge">${t}</span>`).join("")}
              </div>
              <div class="proj-actions-group">
                <a href="${proj.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
                  ${Icons.github}
                  <span>Code Repository</span>
                </a>
                ${
                  proj.dashboardUrl
                    ? `
                <a href="${proj.dashboardUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                  <span>View Dashboard</span>
                  ${Icons.arrowUpRight}
                </a>`
                    : `
                <a href="#contact" class="btn btn-outline btn-sm">
                  <span>Inquire Project</span>
                </a>`
                }
              </div>
            </div>
          </div>
        </div>`;
      })
      .join("");

    const dotsHtml = data.featuredProjects
      .map(
        (_, index) => `
      <button class="carousel-dot ${index === 0 ? "active" : ""}" data-slide-to="${index}" aria-label="Go to project ${index + 1}"></button>`
      )
      .join("");

    return `
      <section class="featured-projects-section section-padding" id="projects">
        <div class="container">
          <div class="section-header-flex">
            <div class="section-header-left">
              <span class="section-tag">05. PORTFOLIO SHOWCASE</span>
              <h2 class="section-title">Featured Projects</h2>
              <p class="section-subtitle">End-to-end analytics initiatives spanning SQL data modeling, DAX dashboards, and predictive machine learning.</p>
            </div>
            <div class="carousel-controls-desktop">
              <button class="carousel-btn prev-btn" id="carouselPrev" aria-label="Previous project">
                ${Icons.chevronLeft}
              </button>
              <button class="carousel-btn next-btn" id="carouselNext" aria-label="Next project">
                ${Icons.chevronRight}
              </button>
            </div>
          </div>

          <div class="featured-carousel-wrapper">
            <div class="carousel-container" id="projectsCarouselContainer">
              <div class="carousel-track" id="projectsCarouselTrack">
                ${slidesHtml}
              </div>
            </div>

            <div class="carousel-bottom-nav">
              <div class="carousel-dots-wrapper" id="carouselDots">
                ${dotsHtml}
              </div>
              <div class="carousel-controls-mobile">
                <button class="carousel-btn prev-btn-mobile" id="carouselPrevMobile" aria-label="Previous project">
                  ${Icons.chevronLeft}
                </button>
                <button class="carousel-btn next-btn-mobile" id="carouselNextMobile" aria-label="Next project">
                  ${Icons.chevronRight}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Certifications Section
  renderCertifications(data) {
    const certsHtml = data.certifications
      .map(
        (c, idx) => `
      <div class="cert-card">
        <div class="cert-card-top">
          <div class="cert-badge-wrap">
            <span class="cert-icon">${Icons.award}</span>
            <span class="cert-issuer-badge">${c.issuer}</span>
          </div>
          <span class="cert-date">${c.issueDate}</span>
        </div>

        <h3 class="cert-title">${c.title}</h3>
        <p class="cert-desc">${c.description}</p>

        <div class="cert-skills-wrap">
          ${c.skillsCovered.map(s => `<span class="cert-skill-tag">${s}</span>`).join("")}
        </div>

        <div class="cert-footer">
          <span class="cert-id-tag">ID: ${c.credentialId}</span>
          <button class="btn btn-outline btn-sm cert-pdf-modal-btn" data-cert-title="${c.title}" data-cert-issuer="${c.issuer}" data-cert-id="${c.credentialId}" data-cert-date="${c.issueDate}" data-cert-pdf="${c.pdf}">
            <span>VIEW CREDENTIAL</span>
            ${Icons.arrowUpRight}
          </button>
        </div>
      </div>`
      )
      .join("");

    return `
      <section class="certifications-section section-padding" id="certifications">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">06. CREDENTIALS & MASTERY</span>
            <h2 class="section-title">Certifications</h2>
            <p class="section-subtitle">Verified technical certifications across modern data analysis, relational databases, and quantitative tooling.</p>
          </div>

          <div class="certifications-grid">
            ${certsHtml}
          </div>
        </div>
      </section>
    `;
  },

  // Leadership & Extracurricular Section (with Achievements subsection)
  renderActivities(data) {
    const act = data.activities;
    const metricsHtml = act.metrics
      .map(
        m => `
      <div class="lead-metric-box">
        <div class="lead-metric-value">${m.value}</div>
        <div class="lead-metric-label">${m.label}</div>
      </div>`
      )
      .join("");

    const highlightsHtml = act.highlights
      .map(
        h => `
      <li class="lead-item">
        <span class="lead-bullet">${Icons.check}</span>
        <span class="lead-text">${h}</span>
      </li>`
      )
      .join("");

    const achievementsHtml = (data.achievements || [])
      .map(
        ach => `
      <div class="achievement-card">
        <div class="ach-top-row">
          <span class="ach-number">${ach.number}</span>
          <span class="ach-icon">${Icons[ach.icon] || Icons.trophy}</span>
          <div class="ach-title-block">
            <h4 class="ach-title">${ach.title}</h4>
            <div class="ach-result-badge">${ach.result}</div>
          </div>
          <span class="ach-date">${ach.date}</span>
        </div>
        <p class="ach-desc">${ach.description}</p>
      </div>`
      )
      .join("");

    return `
      <section class="extracurricular-section section-padding" id="extracurricular">
        <div class="container">
          <div class="section-header">
            <span class="section-tag">07. INITIATIVE & IMPACT</span>
            <h2 class="section-title">Leadership & Extra-Curricular</h2>
            <p class="section-subtitle">Demonstrated ownership, program operations, and organizational team leadership.</p>
          </div>

          <div class="leadership-featured-card">
            <div class="leadership-header">
              <div class="lead-title-group">
                <span class="lead-org-tag">${act.organization}</span>
                <h3 class="lead-role">${act.role}</h3>
              </div>
              <span class="lead-duration">${act.duration}</span>
            </div>

            <div class="leadership-metrics-row">
              ${metricsHtml}
            </div>

            <div class="leadership-details">
              <h4 class="lead-subhead">CORE CONTRIBUTIONS & HIGHLIGHTS</h4>
              <ul class="lead-list">
                ${highlightsHtml}
              </ul>
            </div>
          </div>

          <!-- Achievements & Extra-Curricular Subsection -->
          <div class="achievements-subsection">
            <h3 class="achievements-section-title">ACHIEVEMENTS & EXTRA-CURRICULAR</h3>
            <div class="achievements-grid">
              ${achievementsHtml}
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Contact Section
  renderContact(data) {
    const contactCardsHtml = data.contact.cards
      .map(
        c => `
      <a href="${c.href}" ${c.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} class="contact-method-card" aria-label="${c.label}: ${c.value}">
        <div class="contact-icon-box">${Icons[c.icon] || Icons.mail}</div>
        <div class="contact-method-info">
          <span class="contact-method-label">${c.label}</span>
          <span class="contact-method-value">${c.value}</span>
        </div>
        <span class="contact-link-arrow">${Icons.arrowUpRight}</span>
      </a>`
      )
      .join("");

    return `
      <section class="contact-section section-padding" id="contact">
        <div class="container">
          <div class="section-header text-center">
            <span class="section-tag">08. GET IN TOUCH</span>
            <h2 class="section-title">${data.contact.heading}</h2>
            <p class="section-subtitle">${data.contact.subtitle}</p>
          </div>

          <div class="contact-inquiries-wrapper">
            <h3 class="direct-inquiries-heading">${data.contact.directInquiriesHeading || "DIRECT INQUIRIES"}</h3>

            <div class="contact-cards-grid">
              ${contactCardsHtml}
            </div>

            <div class="resume-download-row">
              <a href="${data.contact.resumePdf || 'assets/resume/Koyana - 12527287 - Specialized CV(1).pdf'}" download="Koyana - 12527287 - Specialized CV(1).pdf" target="_blank" class="btn btn-primary resume-download-btn" id="contactDownloadResumeBtn" aria-label="Download Koyana Sahu Resume PDF">
                <span>DOWNLOAD RESUME</span>
                ${Icons.download}
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  // Footer
  renderFooter(data) {
    const currentYear = new Date().getFullYear();
    return `
      <footer class="site-footer">
        <div class="container footer-content">
          <div class="footer-top-row">
            <div class="footer-brand">
              <span class="footer-monogram">${data.personal.monogram}</span>
              <div class="footer-name-wrap">
                <span class="footer-name">${data.personal.name}</span>
                <span class="footer-role">${data.personal.role}</span>
              </div>
            </div>

            <div class="footer-social-links">
              <a href="${data.personal.linkedin}" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="LinkedIn Profile">
                ${Icons.linkedin}
                <span>LinkedIn</span>
              </a>
              <a href="${data.personal.github}" target="_blank" rel="noopener noreferrer" class="footer-social-link" aria-label="GitHub Profile">
                ${Icons.github}
                <span>GitHub</span>
              </a>
              <a href="mailto:${data.personal.email}" class="footer-social-link" aria-label="Direct Email">
                ${Icons.mail}
                <span>Email</span>
              </a>
            </div>
          </div>

          <div class="footer-divider"></div>

          <div class="footer-bottom-row">
            <p class="footer-copyright">
              &copy; ${currentYear} ${data.personal.name}. ALL RIGHTS RESERVED.
            </p>
            <button class="back-to-top-btn" id="backToTopBtn" aria-label="Back to top">
              <span>BACK TO TOP</span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18 15 12 9 6 15"/></svg>
            </button>
          </div>
        </div>
      </footer>
    `;
  },

  // Modals Container & Toast
  renderModalsAndToasts() {
    return `
      <!-- Internship Certificate Modal -->
      <div class="modal-backdrop" id="certificateModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="modalCertTitle">
        <div class="modal-dialog">
          <div class="modal-header">
            <div class="modal-title-wrap">
              <span class="modal-tag">VERIFIED CREDENTIAL</span>
              <h3 class="modal-title" id="modalCertTitle">Internship Certificate Preview</h3>
            </div>
            <button class="modal-close-btn" data-close-modal aria-label="Close modal">
              ${Icons.close}
            </button>
          </div>
          <div class="modal-body">
            <div class="cert-preview-card">
              <div class="cert-preview-frame">
                <div class="cert-badge-large">${Icons.award}</div>
                <h4 class="cert-preview-name">Zorgers Home Healthcare Pvt. Ltd.</h4>
                <p class="cert-preview-role">Business Analyst Intern Certificate of Completion</p>
                <div class="cert-preview-meta">
                  <div class="meta-row"><span>Candidate:</span> <strong>KOYANA SAHU</strong></div>
                  <div class="meta-row"><span>Domain:</span> <strong>Healthcare Sales & Operational Analytics</strong></div>
                  <div class="meta-row"><span>Status:</span> <strong>Verified Academic & Corporate Practicum</strong></div>
                </div>
                <div class="cert-stamp">VERIFIED CREDENTIAL</div>
              </div>
            </div>
            <p class="modal-footnote">Official verification documents and reference contacts are available upon request for authorized employer background checks.</p>
          </div>
          <div class="modal-footer">
            <button class="btn btn-outline btn-sm" data-close-modal>Close</button>
            <a href="mailto:koyanasahu12@gmail.com?subject=Certificate%20Verification%20Request" class="btn btn-primary btn-sm">Request Official PDF</a>
          </div>
        </div>
      </div>

      <!-- One-Click PDF Certificate Viewer Modal -->
      <div class="modal-backdrop modal-backdrop-pdf" id="certPdfModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="pdfModalTitle">
        <div class="modal-dialog modal-dialog-pdf">
          <div class="modal-header">
            <div class="modal-title-wrap">
              <span class="modal-tag" id="pdfModalIssuer">IBM VERIFIED CREDENTIAL</span>
              <h3 class="modal-title" id="pdfModalTitle">Certificate Preview</h3>
            </div>
            <button class="modal-close-btn" id="pdfModalCloseBtn" data-close-modal aria-label="Close modal">
              ${Icons.close}
            </button>
          </div>
          <div class="modal-body modal-body-pdf">
            <div class="pdf-viewer-container" id="pdfViewerWrapper">
              <iframe id="pdfViewerFrame" src="" class="cert-pdf-iframe" title="Certificate PDF Viewer"></iframe>
            </div>
          </div>
          <div class="modal-footer modal-footer-pdf">
            <button class="btn btn-outline btn-sm" data-close-modal>Close</button>
            <a href="" download="" class="btn btn-primary btn-sm" id="pdfDownloadBtn">
              ${Icons.download}
              <span>DOWNLOAD CERTIFICATE</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Toast Notification Container -->
      <div class="toast-container" id="toastContainer" aria-live="polite"></div>
    `;
  }
};
