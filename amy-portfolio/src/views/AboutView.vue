<template>
  <main class="page-container">
    <section class="section section-narrow" v-reveal>
      <h1 class="section-title">About Me</h1>
      <p class="section-subtitle">
        Background, technical focus, and professional approach.
      </p>

      <div class="info-grid">
        <div class="content-card" v-reveal>
          <h3>Who I Am</h3>
          <p>Developer from Austria with roots in the United States.</p>
        </div>

        <div class="content-card" v-reveal>
          <h3>Technical Focus</h3>
          <p>Backend systems, Discord bots, automation, analytics.</p>
        </div>

        <div class="content-card" v-reveal>
          <h3>Community Management</h3>
          <p>Moderation leadership and workflow architecture.</p>
        </div>
      </div>
    </section>
  </main>
</template>