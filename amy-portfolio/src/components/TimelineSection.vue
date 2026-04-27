<template>
  <section class="timeline">
    <h2>Experience</h2>

    <div class="timeline-item" v-for="item in timeline" :key="item.title">
      <div class="dot"></div>

      <div class="content">
        <h3>{{ item.title }}</h3>
        <span>{{ item.year }}</span>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const timeline = [
  {
    title: 'Lead Backend Developer',
    year: '2024 - Present',
    description: 'Architecting scalable backend systems and APIs.'
  },
  {
    title: 'Discord Infrastructure Engineer',
    year: '2022 - 2024',
    description: 'Built large-scale moderation and automation systems.'
  },
  {
    title: 'Freelance Full Stack Developer',
    year: '2020 - Present',
    description: 'Delivered premium web apps and SaaS platforms.'
  }
]
</script>