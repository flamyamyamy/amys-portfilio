import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ResumeView from '../views/ResumeView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import ImprintView from '../views/ImprintView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/projects', component: ProjectsView },
    { path: '/resume', component: ResumeView },
    { path: '/contact', component: ContactView },
    { path: '/privacy', component: PrivacyView },
    { path: '/imprint', component: ImprintView },
  ]
})

export default router