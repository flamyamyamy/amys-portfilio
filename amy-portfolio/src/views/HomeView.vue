<script setup>
import AppNavbar from '../components/layout/AppNavbar.vue'
import TypedTerminal from '../components/effects/TypedTerminal.vue'
import amyImage from '../assets/images/amy.jpg'
</script>

<template>
  <AppNavbar />

  <!-- HERO -->
  <section class="hero" id="home">
    <div class="hero-content">
      <div class="hero-face-wrapper">
        <img :src="amyImage" alt="Amy" class="hero-image" />
      </div>

      <div class="hero-text">
        <h1 class="glitch">Amy</h1>

        <TypedTerminal />

        <div class="tech-badges">
          <span class="badge badge-orange">Java</span>
          <span class="badge badge-yellow">JavaScript</span>
          <span class="badge badge-blue">TypeScript</span>
          <span class="badge badge-green">Python</span>
          <span class="badge badge-purple">C#</span>
          <span class="badge badge-pink">Community Management</span>
        </div>

        <div class="hero-actions">
          <a
            href="https://github.com/flamyamyamy"
            target="_blank"
            class="btn btn-primary"
          >
            GitHub
          </a>

          <a href="#projects" class="btn btn-secondary">
            Projects
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section id="projects" class="section">
    <h2 class="section-title">// Projects</h2>

    <div class="grid-1">
      <div class="card project-card">
        <div class="tech-badges">
          <span class="badge badge-yellow">JavaScript</span>
          <span class="badge badge-blue">PostgreSQL</span>
        </div>

        <h3>Yuna Bot</h3>

        <p>
          Advanced Discord moderation and utility bot featuring scalable
          PostgreSQL infrastructure, modular architecture and modern command
          handling.
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
    </div>
  </section>

  <!-- SKILLS -->
  <section id="skills" class="section">
    <h2 class="section-title">// Skills</h2>

    <div class="grid-3">
      <div class="skill-card">
        <h3>Moderation Systems</h3>
        <p>
          Designing scalable moderation workflows, permission systems and
          community management tooling.
        </p>
      </div>

      <div class="skill-card">
        <h3>Discord Bot & Web Development</h3>
        <p>
          Building performant Discord bots, backend systems and modern web
          applications.
        </p>
      </div>

      <div class="skill-card">
        <h3>Legal Studies</h3>
        <p>
          Focused on European Union Law, Austrian Law, German Law, U.S. Legal
          Systems and UK/Common Law fundamentals.
        </p>
      </div>
    </div>
  </section>
</template>