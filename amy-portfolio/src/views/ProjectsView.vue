<template>
  <main class="page-container">
    <section class="section section-narrow" v-reveal>
      <h1 class="section-title">Projects</h1>
      <p class="section-subtitle">
        A selection of systems, tools, and platforms I have designed and built.
      </p>

      <div class="projects-grid">
        <div class="project-card" v-reveal>
          <h3>Yuna Bot</h3>
          <p><strong>Category:</strong> Discord Infrastructure</p>
          <p><strong>Stack:</strong> Java, PostgreSQL, REST APIs</p>
          <p>
            Enterprise-grade moderation and automation platform built for scalable
            Discord community management.
          </p>
          <a
            href="https://github.com/orgs/Yuna-Bot-Discord/"
            target="_blank"
            rel="noopener"
            class="btn btn-secondary"
          >
            View Repository
          </a>
        </div>

        <div class="project-card" v-reveal>
          <h3>Analytics Tooling</h3>
          <p><strong>Category:</strong> Internal Platform</p>
          <p><strong>Stack:</strong> JavaScript, Data Processing</p>
          <p>
            Custom-built analytics and market tooling for structured data analysis
            and automated reporting workflows.
          </p>
        </div>

        <div class="project-card" v-reveal>
          <h3>Moderation Framework</h3>
          <p><strong>Category:</strong> Community Systems</p>
          <p><strong>Stack:</strong> Workflow Design / Automation</p>
          <p>
            Designed scalable moderation workflows and staff systems for online
            communities and operational teams.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>