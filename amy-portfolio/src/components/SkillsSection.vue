<template>
  <section class="skills">
    <h2>Tech Stack</h2>

    <div class="skill" v-for="skill in skills" :key="skill.name">
      <span>{{ skill.name }}</span>

      <div class="bar">
        <div class="fill" :style="{ width: skill.level + '%' }"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const skills = [
  { name: 'Vue.js', level: 95 },
  { name: 'TypeScript', level: 92 },
  { name: 'Java', level: 90 },
  { name: 'Node.js', level: 88 },
  { name: 'PostgreSQL', level: 85 }
]
</script>