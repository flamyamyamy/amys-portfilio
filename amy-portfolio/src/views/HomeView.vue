<script setup>
import { onMounted } from 'vue'
import TypedTerminal from '../components/effects/TypedTerminal.vue'
import amyImage from '../assets/images/amy.jpg'

onMounted(() => {
  const hero = document.querySelector('.hero-parallax')

  window.addEventListener('scroll', () => {
    if (!hero) return
    const offset = window.scrollY * 0.25
    hero.style.transform = `translateY(${offset}px)`
  })
})
</script>

<template>
  <main class="page-container">
    <section class="hero" v-reveal>
      <div class="hero-content">
        <img
          :src="amyImage"
          class="hero-image hero-parallax"
          alt="Amy"
        />

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
  </main>
</template>