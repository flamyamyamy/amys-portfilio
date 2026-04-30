<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="logo" @click="closeMenu">
      flamyamy
    </router-link>

    <button
      class="menu-toggle"
      @click="menuOpen = !menuOpen"
      aria-label="Toggle navigation"
    >
      ☰
    </button>

    <div class="nav-links" :class="{ open: menuOpen }">
      <router-link to="/" @click="closeMenu">Home</router-link>
      <router-link to="/projects" @click="closeMenu">Projects</router-link>
      <router-link to="/resume" @click="closeMenu">Resume</router-link>
      <router-link to="/contact" @click="closeMenu">Contact</router-link>
      <router-link to="/privacy" @click="closeMenu">Privacy</router-link>
      <router-link to="/imprint" @click="closeMenu">Imprint</router-link>

      <a
        href="https://github.com/flamyamyamy"
        target="_blank"
        rel="noopener"
        class="nav-github"
        @click="closeMenu"
      >
        GitHub ↗
      </a>
    </div>
  </nav>
</template>
