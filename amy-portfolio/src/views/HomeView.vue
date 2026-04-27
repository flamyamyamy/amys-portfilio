<script setup>
import AppNavbar from '../components/layout/AppNavbar.vue'
import TypedTerminal from '../components/effects/TypedTerminal.vue'
import amyImage from '../assets/images/amy.jpg'
</script>

<template>
  <AppNavbar />

  <section class="hero">
    <div class="hero-content">
      <img :src="amyImage" class="hero-image" />

      <div class="hero-text">
        <h1 class="glitch">Amy</h1>
        <TypedTerminal />
      </div>
    </div>
  </section>
</template>