<template>
  <canvas id="bg-canvas"></canvas>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const canvas = document.getElementById('bg-canvas')
  const ctx = canvas.getContext('2d')

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  resize()
  window.addEventListener('resize', resize)

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < 50; i++) {
      ctx.fillStyle = 'rgba(216,180,254,0.08)'
      ctx.beginPath()
      ctx.arc(
        Math.random() * canvas.width,
        Math.random() * canvas.height,
        2,
        0,
        Math.PI * 2
      )
      ctx.fill()
    }

    requestAnimationFrame(animate)
  }

  animate()
})
</script>

<style scoped>
#bg-canvas {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
}
</style>