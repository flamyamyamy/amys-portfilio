<script setup>
import AppNavbar from './components/Navbar.vue'
import TypedTerminal from './components/effects/TypedTerminal.vue'
import amyImage from './assets/images/amy.jpg'
</script>

<template>
  <AppNavbar />


  <section class="hero">
    <div class="hero-content">
      <div class="hero-left">
        <img :src="amyImage" class="hero-image" />
      </div>

      <div class="hero-right">
        <span class="status-badge">● Available for Projects</span>

        <h1 class="hero-title">Amy</h1>

        <p class="hero-subtitle">
          Developer • Analyst • Community Architect
        </p>

        <TypedTerminal />

        <p class="hero-description">
          19 🇦🇹 Law Student and Developer specializing in scalable Discord bots,
          backend systems, moderation infrastructure, and modern web applications.
          Focused on clean architecture, maintainability, and building impactful systems.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">Projects</a>
          <a
            href="https://github.com/flamyamyamy"
            target="_blank"
            class="btn btn-secondary"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>


  <section class="section" id="skills">
    <h2 class="section-title">Skills</h2>

    <div class="skills-grid">
      <span>Java</span>
      <span>JavaScript</span>
      <span>TypeScript</span>
      <span>Python</span>
      <span>C#</span>
      <span>Vue.js</span>
      <span>Node.js</span>
      <span>PostgreSQL</span>
      <span>Docker</span>
      <span>Discord.js</span>
      <span>Community Management</span>
      <span>System Architecture</span>
    </div>
  </section>


  <section class="section" id="projects">
    <h2 class="section-title">Projects</h2>

    <div class="projects-grid">
      <div class="project-card">
        <h3>Yuna Bot</h3>

        <p>
          Advanced Discord moderation and utility bot featuring scalable
          PostgreSQL infrastructure, modular architecture, permission systems,
          and enterprise-grade command handling.
        </p>

        <div class="project-tags">
          <span>JavaScript</span>
          <span>PostgreSQL</span>
          <span>Discord.js</span>
        </div>
      </div>

      <div class="project-card">
        <h3>Stock Analytics Tool</h3>

        <p>
          Custom-built financial analytics platform for stock market research,
          trend analysis, and data-driven investment insights.
        </p>

        <div class="project-tags">
          <span>Python</span>
          <span>Pandas</span>
          <span>Finance</span>
        </div>
      </div>

      <div class="project-card">
        <h3>Moderation Systems</h3>

        <p>
          Designing scalable moderation workflows, permission systems,
          automations, and internal community management tooling.
        </p>

        <div class="project-tags">
          <span>Architecture</span>
          <span>Automation</span>
          <span>Systems Design</span>
        </div>
      </div>
    </div>
  </section>


  <section class="section">
    <h2 class="section-title">Experience</h2>

    <div class="timeline">
      <div class="timeline-item">
        <span>2026</span>
        <p>Community Architect / Full Stack Developer</p>
      </div>

      <div class="timeline-item">
        <span>2025</span>
        <p>Lead Developer of Yuna Bot Infrastructure</p>
      </div>

      <div class="timeline-item">
        <span>2024</span>
        <p>Started Legal Studies (EU / Austrian / German / UK / US Law)</p>
      </div>

      <div class="timeline-item">
        <span>2020</span>
        <p>Began Software Development Journey</p>
      </div>
    </div>
  </section>
</template>