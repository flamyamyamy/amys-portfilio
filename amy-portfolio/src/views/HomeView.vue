<script setup>
import TypedTerminal from '../components/effects/TypedTerminal.vue'
import amyImage from '../assets/images/amy.jpg'
</script>

<template>
  <main>
    <section class="hero">
      <div class="hero-content">
        <div>
          <img :src="amyImage" class="hero-image" alt="Amy" />
        </div>

        <div>
          <span class="status-badge">● Available for Projects</span>

          <h1 class="hero-title">
            Amy <br />
          </h1>

          <p class="hero-subtitle">
            Developer • Law Student • Community Architect
          </p>

          <TypedTerminal />

          <p class="hero-description">
            Specialized in scalable Discord bots, backend systems,
            moderation architecture, and clean maintainable software
            infrastructure built for premium communities and modern platforms.
          </p>

          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">
              View Projects
            </a>

            <a
              href="https://github.com/flamyamyamy"
              target="_blank"
              rel="noopener"
              class="btn btn-secondary"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="skills">
      <h2 class="section-title">Core Expertise</h2>

      <div class="projects-grid">
        <div class="skill-card">
          <h3>Backend Engineering</h3>
          <p>Robust APIs, scalable architecture and maintainable systems.</p>
        </div>

        <div class="skill-card">
          <h3>Discord Infrastructure</h3>
          <p>Enterprise-grade bots and moderation automation.</p>
        </div>

        <div class="skill-card">
          <h3>Community Systems</h3>
          <p>Permission structures and moderation workflows.</p>
        </div>

        <div class="skill-card">
          <h3>Legal Analysis</h3>
          <p>Structured reasoning across multiple jurisdictions.</p>
        </div>
      </div>
    </section>

    <section class="section" id="projects">
      <h2 class="section-title">Featured Project</h2>

      <div class="project-card">
        <h3>Yuna Bot</h3>

        <p>
          Advanced Discord moderation and utility platform featuring scalable
          PostgreSQL infrastructure and premium-grade modular architecture.
        </p>

        <div class="hero-actions">
          <a
            href="https://github.com/orgs/Yuna-Bot-Discord/"
            target="_blank"
            class="btn btn-secondary"
          >
            GitHub
          </a>

          <a
            href="https://discord.gg/RjTFsjRT7y"
            target="_blank"
            class="btn btn-primary"
          >
            Discord
          </a>
        </div>
      </div>
    </section>

    <section class="section" id="experience">
      <h2 class="section-title">Experience Timeline</h2>

      <div class="timeline">
        <div class="timeline-item">
          <span>2020</span>
          <p>Entered Community Management & Moderation Leadership</p>
        </div>

        <div class="timeline-item">
          <span>2024</span>
          <p>Founded Investment Group / Entrepreneurial Operations</p>
        </div>

        <div class="timeline-item">
          <span>2026</span>
          <p>Lead Developer of Yuna Bot</p>
        </div>

        <div class="timeline-item">
          <span>2026</span>
          <p>Began Legal Studies</p>
        </div>
      </div>
    </section>
  </main>
</template>