<script setup>
import AppNavbar from '../components/Navbar.vue'
import TypedTerminal from '../components/effects/TypedTerminal.vue'
import amyImage from '../assets/images/amy.jpg'
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
          Full Stack Developer • Community Architect • Systems Designer
        </p>

        <TypedTerminal />

        <p class="hero-description">
          Building scalable Discord bots, backend systems, moderation workflows,
          and modern web experiences with a strong focus on performance,
          maintainability, and clean architecture.
        </p>

        <div class="hero-actions">
          <a href="#projects" class="btn btn-primary">Projects</a>
          <a href="https://github.com/flamyamyamy" target="_blank" class="btn btn-secondary">GitHub</a>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Skills</h2>

    <div class="skills-grid">
      <span>Java</span>
      <span>TypeScript</span>
      <span>Vue.js</span>
      <span>Node.js</span>
      <span>PostgreSQL</span>
      <span>Python</span>
      <span>Docker</span>
      <span>Community Management</span>
    </div>
  </section>

  <section class="section" id="projects">
    <h2 class="section-title">Projects</h2>

    <div class="projects-grid">
      <div class="project-card">
        <h3>Yuna Bot</h3>
        <p>
          Advanced Discord moderation and utility bot featuring scalable
          PostgreSQL infrastructure and modular architecture.
        </p>

        <div class="project-tags">
          <span>Node.js</span>
          <span>PostgreSQL</span>
          <span>Discord.js</span>
        </div>
      </div>

      <div class="project-card">
        <h3>Stock Analytics Tool</h3>
        <p>
          Custom analytics software for stock market research and
          data-driven insights.
        </p>

        <div class="project-tags">
          <span>Python</span>
          <span>Pandas</span>
          <span>Finance</span>
        </div>
      </div>
    </div>
  </section>

  <section class="section">
    <h2 class="section-title">Experience</h2>

    <div class="timeline">
      <div class="timeline-item">
        <span>2020</span>
        <p>Community Architect / Developer</p>
      </div>

      <div class="timeline-item">
        <span>2026</span>
        <p>Lead Developer of Yuna Bot</p>
      </div>

      <div class="timeline-item">
        <span>2026</span>
        <p>Started Legal Studies</p>
      </div>
    </div>
  </section>
</template>