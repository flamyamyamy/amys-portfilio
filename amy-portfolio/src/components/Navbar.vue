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
      <router-link to="/" @click="closeMenu">
        Home
      </router-link>

      <router-link to="/about" @click="closeMenu">
        About
      </router-link>

      <router-link
        :to="{ path: '/', hash: '#skills' }"
        @click="closeMenu"
      >
        Skills
      </router-link>

      <router-link
        :to="{ path: '/', hash: '#projects' }"
        @click="closeMenu"
      >
        Projects
      </router-link>

      <router-link
        :to="{ path: '/', hash: '#experience' }"
        @click="closeMenu"
      >
        Experience
      </router-link>

      <router-link to="/imprint" @click="closeMenu">
        Imprint
      </router-link>

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

  <router-view />
</template>