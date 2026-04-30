import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('../views/HomeView.vue')
const ProjectsView = () => import('../views/ProjectsView.vue')
const ResumeView = () => import('../views/ResumeView.vue')
const ContactView = () => import('../views/ContactView.vue')
const PrivacyView = () => import('../views/PrivacyView.vue')
const ImprintView = () => import('../views/ImprintView.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
      meta: { title: 'Home | flamyamy' }
    },
    {
      path: '/projects',
      component: ProjectsView,
      meta: { title: 'Projects | flamyamy' }
    },
    {
      path: '/resume',
      component: ResumeView,
      meta: { title: 'Resume | flamyamy' }
    },
    {
      path: '/contact',
      component: ContactView,
      meta: { title: 'Contact | flamyamy' }
    },
    {
      path: '/privacy',
      component: PrivacyView,
      meta: { title: 'Privacy | flamyamy' }
    },
    {
      path: '/imprint',
      component: ImprintView,
      meta: { title: 'Imprint | flamyamy' }
    }
  ],
  scrollBehavior() {
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'flamyamy'
})

export default router
