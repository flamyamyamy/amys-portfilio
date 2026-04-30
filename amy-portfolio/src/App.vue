<script setup>
import { onMounted } from 'vue'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'

onMounted(() => {
  const initTilt = () => {
    const cards = document.querySelectorAll('.tilt-card')

    cards.forEach(card => {
      if (card.dataset.tiltBound) return
      card.dataset.tiltBound = 'true'

      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        const centerX = rect.width / 2
        const centerY = rect.height / 2

        const rotateX = ((y - centerY) / centerY) * -8
        const rotateY = ((x - centerX) / centerX) * 8

        card.style.transform = `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(1.03)
        `
      })

      card.addEventListener('mouseleave', () => {
        card.style.transform = `
          perspective(1000px)
          rotateX(0deg)
          rotateY(0deg)
          scale(1)
        `
      })
    })
  }

  const initReveal = () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.15 })

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  }

  initTilt()
  initReveal()

  const mutationObserver = new MutationObserver(() => {
    initTilt()
    initReveal()
  })

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true
  })
})
</script>

<template>
  <AppNavbar />
  <router-view />
  <AppFooter />
</template>