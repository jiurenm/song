import { createRouter, createWebHistory } from 'vue-router'
import SectionOne from '@/components/Section1.vue'
import SectionTwo from '@/components/Section2.vue'
import SectionThree from '@/components/Section3.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: () => {
        return { path: '/section1' }
      },
    },
    {
      path: '/section1',
      name: 'section1',
      component: SectionOne,
    },
    {
      path: '/section2',
      name: 'section2',
      component: SectionTwo,
    },
    {
      path: '/section3',
      name: 'section3',
      component: SectionThree,
    },
  ],
})

export default router
