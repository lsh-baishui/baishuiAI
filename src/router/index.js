import { createRouter, createWebHistory } from 'vue-router'
import ResumeView from '@/views/ResumeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'resume',
      component: ResumeView,
      meta: { title: '李松浩 · 个人简历 | 白水AI' },
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('@/views/CasesView.vue'),
      meta: { title: '案例墙 | 白水AI' },
    },
    // 旧业务线路由统一归入案例墙
    { path: '/courses', redirect: '/cases' },
    { path: '/workbench', redirect: '/cases' },
    { path: '/toolbox', redirect: '/cases' },
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
})

router.afterEach((to) => {
  document.title = to.meta.title ?? '白水AI'
})

export default router
