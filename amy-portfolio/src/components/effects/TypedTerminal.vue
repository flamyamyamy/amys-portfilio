<script setup>
import { ref, onMounted } from 'vue'

const texts = [
  '19 🇦🇹 | Law Student | Developer',
  'Java • JavaScript • TypeScript',
  'Discord Bots & Web Development',
  'Backend Systems & Automation',
  'Coffee Powered Engineering ☕',
  'github.com/flamyamyamy',
  'UwU, I’m Amy 🐾'
]

const displayedText = ref('')

let textIndex = 0
let charIndex = 0
let deleting = false

function typeLoop() {
  const current = texts[textIndex]

  if (!deleting) {
    displayedText.value = current.slice(0, charIndex++)
    if (charIndex > current.length) {
      deleting = true
      setTimeout(typeLoop, 1800)
      return
    }
  } else {
    displayedText.value = current.slice(0, charIndex--)
    if (charIndex < 0) {
      deleting = false
      textIndex = (textIndex + 1) % texts.length
    }
  }

  setTimeout(typeLoop, deleting ? 35 : 70)
}

onMounted(() => {
  typeLoop()
})
</script>

<template>
  <div class="typed-terminal">
    <span class="prompt">$</span>
    <span class="typed-text">{{ displayedText }}</span>
    <span class="cursor">_</span>
  </div>
</template>

<style scoped>
.typed-terminal {
  display: flex;
  align-items: center;
  gap: .5rem;

  margin-top: 1.25rem;
  padding: 1rem 1.25rem;

  border-radius: 14px;

  background: rgba(255,255,255,.03);
  border: 1px solid rgba(255,255,255,.06);

  font-family: 'JetBrains Mono', monospace;
  font-size: .95rem;

  width: fit-content;
  max-width: 100%;
}

.prompt {
  color: #c084fc;
  font-weight: 700;
}

.typed-text {
  color: #ddd;
}

.cursor {
  color: #c084fc;
  font-weight: 700;
  animation: blink .8s infinite;
}

@keyframes blink {
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
}

@media (max-width: 950px) {
  .typed-terminal {
    margin-inline: auto;
    justify-content: center;
    flex-wrap: wrap;
    text-align: center;
  }
}
</style>