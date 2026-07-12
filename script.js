(() => {
  const data = window.PORTFOLIO;
  const state = {
    lang: localStorage.getItem('portfolio-lang') || 'id',
    theme: localStorage.getItem('portfolio-theme') || 'dark',
    filter: 'all',
    music: false
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const t = key => data.translations[state.lang]?.[key] || key;

  const projectsGrid = $('#projectsGrid');
  const experienceTimeline = $('#experienceTimeline');
  const modal = $('#projectModal');
  const languageToggle = $('#languageToggle');
  const themeToggle = $('#themeToggle');
  const themeIcon = $('#themeIcon');
  const menuToggle = $('#menuToggle');
  const mobilePanel = $('#mobilePanel');
  const musicToggle = $('#musicToggle');
  const musicLabel = $('#musicLabel');
  const ambientAudio = $('#ambientAudio');

  function applyTranslations() {
    document.documentElement.lang = state.lang;
    $$('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (data.translations[state.lang]?.[key]) el.textContent = t(key);
    });
    languageToggle.textContent = state.lang === 'id' ? 'EN' : 'ID';
    updateMusicLabel();
  }

  function bindProfile() {
    $('#emailLink').href = `mailto:${data.profile.email}`;
    $('#linkedinLink').href = data.profile.linkedin;
    $('#whatsappLink').href = data.profile.whatsapp;
  }

  function gradient(accent) {
    const map = {
      blue: 'linear-gradient(145deg, rgba(35,126,228,.92), rgba(30,50,102,.94))',
      violet: 'linear-gradient(145deg, rgba(121,87,236,.92), rgba(42,29,91,.94))',
      green: 'linear-gradient(145deg, rgba(33,160,121,.92), rgba(19,70,61,.94))',
      amber: 'linear-gradient(145deg, rgba(210,134,42,.92), rgba(81,48,12,.94))',
      pink: 'linear-gradient(145deg, rgba(219,76,136,.92), rgba(82,26,53,.94))',
      cyan: 'linear-gradient(145deg, rgba(30,165,207,.92), rgba(13,62,82,.94))'
    };
    return map[accent] || map.blue;
  }

  function renderExperience() {
    experienceTimeline.innerHTML = data.experience.map(company => `
      <article class="experience-company reveal">
        <div class="company-heading">
          <div><h3>${company.company}</h3><span>${company.location}</span></div>
          <span>2021 — 2025</span>
        </div>
        <div class="role-list">
          ${company.roles.map(role => `
            <section class="experience-role">
              <div class="role-heading">
                <h4>${role.title[state.lang]}</h4>
                <span>${role.period[state.lang]}</span>
              </div>
              <ul>${role.highlights.map(item => `<li>${item[state.lang]}</li>`).join('')}</ul>
            </section>
          `).join('')}
        </div>
      </article>
    `).join('');
    observeReveals();
  }

  function renderProjects() {
    const projects = data.projects.filter(project => state.filter === 'all' || project.category === state.filter);
    projectsGrid.innerHTML = projects.map(project => `
      <article class="project-card tilt-card reveal" data-id="${project.id}" data-tilt-strength="5" tabindex="0">
        <div class="project-visual" style="background:${gradient(project.accent)}">
          <div class="project-icon">${project.icon}</div>
          <small>${project.kicker[state.lang]}</small>
          <strong>${project.title[state.lang]}</strong>
        </div>
        <div class="project-body">
          <div class="project-tag">${project.category.toUpperCase()}</div>
          <h3>${project.title[state.lang]}</h3>
          <p>${project.summary[state.lang]}</p>
          <div class="project-stack">${project.stack.map(item => `<span>${item}</span>`).join('')}</div>
          <button class="link-button" type="button" data-open-project="${project.id}">${t('openCase')} →</button>
        </div>
      </article>
    `).join('');

    $$('[data-open-project]').forEach(button => {
      button.addEventListener('click', event => {
        event.stopPropagation();
        openProject(button.dataset.openProject);
      });
    });
    $$('.project-card').forEach(card => {
      card.addEventListener('click', () => openProject(card.dataset.id));
      card.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProject(card.dataset.id);
        }
      });
    });
    observeReveals();
    initTiltCards();
  }

  function openProject(id) {
    const project = data.projects.find(item => item.id === id);
    if (!project) return;
    $('#modalVisual').innerHTML = `
      <div class="modal-visual-box" style="background:${gradient(project.accent)}">
        <small>${project.kicker[state.lang]}</small>
        <strong>${project.title[state.lang]}</strong>
      </div>`;
    $('#modalKicker').textContent = project.kicker[state.lang];
    $('#modalTitle').textContent = project.title[state.lang];
    $('#modalSummary').textContent = project.summary[state.lang];
    $('#modalChallengeText').textContent = project.challenge[state.lang];
    $('#modalSolutionText').textContent = project.solution[state.lang];
    $('#modalContributionList').innerHTML = project.contributions.map(item => `<li>${item[state.lang]}</li>`).join('');
    $('#modalFeatureList').innerHTML = project.features.map(item => `<li>${item[state.lang]}</li>`).join('');
    $('#modalStack').innerHTML = project.stack.map(item => `<span>${item}</span>`).join('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    $('.modal-close').focus();
  }

  function closeProject() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  }

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    themeIcon.textContent = theme === 'dark' ? '☼' : '☾';
    localStorage.setItem('portfolio-theme', theme);
  }

  function setLanguage(lang) {
    state.lang = lang;
    localStorage.setItem('portfolio-lang', lang);
    applyTranslations();
    renderProjects();
    renderExperience();
  }

  function updateMusicLabel() {
    musicLabel.textContent = state.music ? t('musicOn') : t('musicOff');
  }

  async function toggleMusic() {
    try {
      if (ambientAudio.paused) {
        ambientAudio.volume = 0.22;
        await ambientAudio.play();
        state.music = true;
        musicToggle.classList.add('playing');
      } else {
        ambientAudio.pause();
        state.music = false;
        musicToggle.classList.remove('playing');
      }
      updateMusicLabel();
    } catch (error) {
      console.warn('Audio playback was blocked:', error);
      state.music = false;
      musicToggle.classList.remove('playing');
      updateMusicLabel();
    }
  }

  function observeReveals() {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        if (entry.target.classList.contains('dashboard-shell')) entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.14 });
    $$('.reveal:not(.in-view), .dashboard-shell:not(.in-view)').forEach(el => observer.observe(el));
  }

  function animateCounters() {
    const counters = $$('.counter');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const target = Number(element.dataset.target || 0);
        const duration = 1200;
        const start = performance.now();
        function frame(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          element.textContent = Math.round(target * eased);
          if (progress < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
        observer.unobserve(element);
      });
    }, { threshold: .7 });
    counters.forEach(counter => observer.observe(counter));
  }

  function initTiltCards() {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    $$('.tilt-card').forEach(card => {
      if (card.dataset.tiltReady === 'true') return;
      card.dataset.tiltReady = 'true';
      const strength = Number(card.dataset.tiltStrength || 4);
      card.addEventListener('pointermove', event => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - .5;
        const y = (event.clientY - rect.top) / rect.height - .5;
        card.style.transform = `perspective(1000px) rotateX(${(-y * strength).toFixed(2)}deg) rotateY(${(x * strength).toFixed(2)}deg) translateZ(0)`;
      });
      card.addEventListener('pointerleave', () => { card.style.transform = ''; });
    });
  }

  function initHeroParallax() {
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const stage = $('#heroStage');
    stage.addEventListener('pointermove', event => {
      const rect = stage.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      $('.portrait-card', stage).style.transform = `perspective(1200px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 8).toFixed(2)}deg)`;
      $$('.floating-card', stage).forEach((card, index) => {
        const depth = 13 + index * 6;
        card.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
      });
    });
    stage.addEventListener('pointerleave', () => {
      $('.portrait-card', stage).style.transform = '';
      $$('.floating-card', stage).forEach(card => { card.style.transform = ''; });
    });
  }

  function initMagneticButtons() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    $$('.magnetic').forEach(button => {
      button.addEventListener('pointermove', event => {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        button.style.transform = `translate(${x * .08}px, ${y * .12}px)`;
      });
      button.addEventListener('pointerleave', () => { button.style.transform = ''; });
    });
  }

  function initParticles() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const canvas = $('#particleCanvas');
    const context = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let ratio = 1;
    let particles = [];

    function resize() {
      ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const count = Math.max(28, Math.min(70, Math.floor(width / 24)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - .5) * .18,
        vy: (Math.random() - .5) * .18,
        radius: Math.random() * 1.4 + .5
      }));
    }

    function draw() {
      context.clearRect(0, 0, width, height);
      const light = document.documentElement.dataset.theme === 'light';
      const dot = light ? 'rgba(46,83,145,.22)' : 'rgba(126,168,240,.28)';
      const line = light ? 'rgba(46,83,145,.055)' : 'rgba(126,168,240,.065)';
      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = dot;
        context.fill();
        for (let j = i + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance < 120) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle = line;
            context.lineWidth = 1 - distance / 120;
            context.stroke();
          }
        }
      });
      requestAnimationFrame(draw);
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });
    draw();
  }

  $$('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      $$('.filter-button').forEach(item => item.classList.remove('active'));
      button.classList.add('active');
      state.filter = button.dataset.filter;
      renderProjects();
    });
  });

  languageToggle.addEventListener('click', () => setLanguage(state.lang === 'id' ? 'en' : 'id'));
  themeToggle.addEventListener('click', () => setTheme(state.theme === 'dark' ? 'light' : 'dark'));
  musicToggle.addEventListener('click', toggleMusic);
  menuToggle.addEventListener('click', () => {
    const isOpen = mobilePanel.classList.toggle('open');
    mobilePanel.setAttribute('aria-hidden', String(!isOpen));
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  $$('.mobile-panel a').forEach(link => link.addEventListener('click', () => {
    mobilePanel.classList.remove('open');
    mobilePanel.setAttribute('aria-hidden', 'true');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
  $$('[data-close-modal]').forEach(element => element.addEventListener('click', closeProject));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeProject(); });

  $('#year').textContent = new Date().getFullYear();
  setTheme(state.theme);
  applyTranslations();
  bindProfile();
  renderExperience();
  renderProjects();
  observeReveals();
  animateCounters();
  initTiltCards();
  initHeroParallax();
  initMagneticButtons();
  initParticles();
})();
