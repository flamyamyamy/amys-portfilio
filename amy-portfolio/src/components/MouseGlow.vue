<template>
  <div
    class="mouse-glow"
    :style="{ left: x + 'px', top: y + 'px' }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const x = ref(0)
const y = ref(0)

const move = e => {
  x.value = e.clientX
  y.value = e.clientY
}

onMounted(() => window.addEventListener('mousemove', move))
onUnmounted(() => window.removeEventListener('mousemove', move))
</script>