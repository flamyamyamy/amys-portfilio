<script setup>
import AppNavbar from './components/Navbar.vue'
</script>

<template>
  <div class="app-shell">
    <AppNavbar />

    <main>
      <router-view />
    </main>
  </div>
</template>

<style>
.app-shell {
  min-height: 100vh;
}
</style>