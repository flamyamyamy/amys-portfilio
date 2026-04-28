<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
</script>

<template>
  <nav class="navbar">
    <router-link to="/" class="logo">flamyamy</router-link>

    <button
      class="menu-toggle"
      @click="menuOpen = !menuOpen"
    >
      ☰
    </button>

    <div class="nav-links" :class="{ open: menuOpen }">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/imprint">Imprint</router-link>
    </div>
  </nav>

  <router-view />
</template>