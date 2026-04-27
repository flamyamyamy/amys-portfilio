<template>
  <AppNavbar />

  <section class="hero about-hero">
    <div class="hero-content">
      <div class="hero-text centered wide">
        <h1 class="glitch">About Me</h1>

        <div class="terminal-line centered">
          <span class="prompt">$</span>
          <span>Developer • Analyst • Community Architect</span>
        </div>

        <p class="hero-description">
          Learn more about my background, experience, technical focus,
          and the philosophy behind the systems I build.
        </p>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="grid-1">
      <div class="card">
        <h3>Who I Am</h3>
        <p>
          My name is Giulia Amy Lyra Yuna Thiex, a developer from Austria
          specialized in scalable backend systems, Discord bots,
          moderation systems and analytical tooling.
        </p>

        <br />

        <h3>Technical Focus</h3>
        <p>
          Strongest in Java and JavaScript, building performant,
          maintainable and scalable software.
        </p>

        <br />

        <h3>Beyond Tech</h3>
        <p>
          Outside of programming I enjoy gym, motorcycles,
          traveling and cooking.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppNavbar from '../components/layout/AppNavbar.vue'
</script>