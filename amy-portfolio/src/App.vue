<template>
  <BackgroundCanvas />
  <Scanlines />
  <RouterView />
</template>

<script setup>
import BackgroundCanvas from '@/components/effects/BackgroundCanvas.vue'
import Scanlines from '@/components/effects/Scanlines.vue'
</script>