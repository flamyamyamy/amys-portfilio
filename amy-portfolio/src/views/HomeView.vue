<script setup>
import TypedTerminal from '../components/effects/TypedTerminal.vue'
import amyImage from '../assets/images/amy.jpg'
</script>

<template>
  <section class="hero">
    <div class="hero-content">
      <div class="hero-left">
        <img :src="amyImage" class="hero-image" alt="Amy" />
      </div>

      <div class="hero-right">
        <span class="status-badge">● Available for Projects</span>

        <h1 class="hero-title">Amy</h1>

        <p class="hero-subtitle">
          Developer • Law Student • Community Architect
        </p>

        <TypedTerminal />

        <p class="hero-description">
          Specialized in Discord bots, backend systems, moderation architecture,
          and scalable community infrastructure with a strong focus on clean,
          maintainable and premium-grade software design.
        </p>

        <div class="hero-actions">
          <router-link
            :to="{ path: '/', hash: '#projects' }"
            class="btn btn-primary"
          >
            Projects
          </router-link>

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

  <section class="section" id="projects">
    <h2 class="section-title">Projects</h2>

    <div class="projects-grid">
      <div class="project-card">
        <h3>Yuna Bot</h3>

        <p>
          Advanced Discord moderation and utility bot featuring scalable
          PostgreSQL infrastructure, modular architecture and modern
          command handling.
        </p>

        <div class="project-tags">
          <span>JavaScript</span>
          <span>PostgreSQL</span>
        </div>

        <div class="hero-actions">
          <a
            href="https://github.com/orgs/Yuna-Bot-Discord/"
            target="_blank"
            rel="noopener"
            class="btn btn-secondary"
          >
            GitHub
          </a>

          <a
            href="https://discord.gg/RjTFsjRT7y"
            target="_blank"
            rel="noopener"
            class="btn btn-primary"
          >
            Discord
          </a>
        </div>
      </div>
    </div>
  </section>

  <section class="section" id="skills">
    <h2 class="section-title">Skills</h2>

    <div class="projects-grid">
      <div class="project-card">
        <h3>Moderation Systems</h3>
        <p>
          Designing scalable moderation workflows, permission systems and
          community management tooling.
        </p>
      </div>

      <div class="project-card">
        <h3>Discord Bot & Web Development</h3>
        <p>
          Building performant Discord bots, backend systems and modern
          web applications.
        </p>
      </div>

      <div class="project-card">
        <h3>Legal Studies</h3>
        <p>
          Focused on European Union Law, Austrian Law, German Law,
          U.S. Legal Systems and UK/Common Law fundamentals.
        </p>
      </div>

      <div class="project-card">
        <h3>Business & Investment Strategy</h3>
        <p>
          Building and managing entrepreneurial ventures, investment structures,
          and long-term strategic growth planning.
        </p>
      </div>
    </div>
  </section>

  <section class="section" id="experience">
    <h2 class="section-title">Experience</h2>

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
</template>