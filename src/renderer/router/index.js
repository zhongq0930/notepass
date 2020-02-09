import Vue from 'vue'
import Router from 'vue-router'

/* Layout */
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          component: () => import('@/views/landing-page/LandingPage'),
          // component: () => import('@/views/dashboard/index'),
          name: 'Dashboard'
        }
      ]
    }
  ]
})
