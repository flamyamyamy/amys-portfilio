<template>
  <nav class="navbar">
    <router-link to="/" class="logo">flamyamy</router-link>

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

      <a
        href="https://github.com/flamyamyamy"
        target="_blank"
        rel="noopener"
      >
        GitHub
      </a>
    </div>
  </nav>
</template>