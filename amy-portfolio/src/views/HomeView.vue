<script setup>
import TypedTerminal from '../components/effects/TypedTerminal.vue'
import amyImage from '../assets/images/amy.jpg'
</script>

<template>
  <main class="page-container">
    <section class="hero">
      <div class="hero-content">
        <img :src="amyImage" class="hero-image" alt="Amy" />

        <div>
          <span class="status-badge">● Available for Projects</span>

          <h1 class="hero-title">Amy</h1>

          <p class="hero-subtitle">
            Developer • Law Student • Community Architect
          </p>

          <TypedTerminal />

          <p class="hero-description">
            Specialized in scalable Discord bots, backend systems,
            moderation architecture, and clean maintainable software infrastructure.
          </p>

          <div class="hero-actions">
            <a href="#projects" class="btn btn-primary">View Projects</a>

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
  </main>
</template>

