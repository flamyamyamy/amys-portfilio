<<<<<<< HEAD
<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

=======
>>>>>>> 027cf9a (Initial local website files)
<template>
  <nav class="navbar">
    <router-link to="/" class="logo">flamyamy</router-link>

<<<<<<< HEAD
    <button
      class="menu-toggle"
      @click="menuOpen = !menuOpen"
      aria-label="Toggle navigation"
    >
      ☰
    </button>

    <div class="nav-links" :class="{ open: menuOpen }">
      <router-link to="/" @click="menuOpen = false">Home</router-link>

      <router-link to="/about" @click="menuOpen = false">
        About
      </router-link>

      <router-link
        :to="{ path: '/', hash: '#skills' }"
        @click="menuOpen = false"
      >
        Skills
      </router-link>

      <router-link
        :to="{ path: '/', hash: '#projects' }"
        @click="menuOpen = false"
      >
        Projects
      </router-link>

      <router-link to="/imprint" @click="menuOpen = false">
        Imprint
      </router-link>
=======
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>

      <router-link :to="{ path: '/', hash: '#skills' }">
        Skills
      </router-link>

      <router-link :to="{ path: '/', hash: '#projects' }">
        Projects
      </router-link>

      <router-link to="/imprint">Imprint</router-link>
>>>>>>> 027cf9a (Initial local website files)

      <a
        href="https://github.com/flamyamyamy"
        target="_blank"
        rel="noopener"
<<<<<<< HEAD
        @click="menuOpen = false"
=======
>>>>>>> 027cf9a (Initial local website files)
      >
        GitHub
      </a>
    </div>
  </nav>
</template>