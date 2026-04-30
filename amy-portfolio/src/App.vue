<script setup>
import { onMounted } from 'vue'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'

onMounted(() => {
  const glow = document.querySelector('.cursor-glow')

  window.addEventListener('mousemove', (e) => {
    if (!glow) return
    glow.style.left = `${e.clientX}px`
    glow.style.top = `${e.clientY}px`
  })
})
</script>

<template>
  <div class="app-grid-bg"></div>
  <div class="cursor-glow"></div>

  <AppNavbar />
  <router-view />
  <AppFooter />
</template>