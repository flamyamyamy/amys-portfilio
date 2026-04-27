<template>
  <div class="terminal-line">
    <span class="prompt">$</span>
    <span>{{ displayed }}</span>
    <span class="cursor">_</span>
  </div>
</template>

<script setup>
import { useTypedTerminal } from '../../composables/useTypedTerminal'

const { displayed } = useTypedTerminal([
  '19 🇦🇹 | Law Student | Developer',
  'Java • JavaScript • TypeScript',
  'Discord Bots & Web Development',
  'Building cool things'
])
</script>