<template>
  <section class="projects" id="projects">
    <h2>Featured Projects</h2>

    <div class="project-grid">
      <div
        class="project-card"
        v-for="project in projects"
        :key="project.name"
      >
        <h3>{{ project.name }}</h3>
        <p>{{ project.description }}</p>

        <div class="tags">
          <span v-for="tag in project.tags" :key="tag">
            {{ tag }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: "Discord Moderation Suite",
    description: "Advanced moderation and automod platform.",
    tags: ["Java", "Redis", "PostgreSQL"]
  },
  {
    name: "Analytics Dashboard",
    description: "Real-time admin dashboard with metrics.",
    tags: ["Vue", "TypeScript", "Node.js"]
  },
  {
    name: "Community Platform",
    description: "Full-stack platform for communities.",
    tags: ["Vue", "Express", "MongoDB"]
  }
]
</script>