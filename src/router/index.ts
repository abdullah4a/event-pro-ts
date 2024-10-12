import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { defaultRoutes } from './defaultRoutes'

const routes: Array<RouteRecordRaw> = [
  ...defaultRoutes
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: (to, from, savedPosition)=>{
    if (savedPosition) {
      return savedPosition;
    } else {
      // If the route has a hash (like #section1), scroll to that element
      if (to.hash) {
        return {
          el: to.hash,
          behavior: 'smooth',
        };
      }
      // Default scroll behavior: scroll to the top of the page
      return { top: 0 };
    }
  }
})

export default router
