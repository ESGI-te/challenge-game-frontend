import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

/* Navigation Guard */
router.beforeEach(async (to, from) => {
  const excludedRoutes = ['login', 'register']
  const isAuthenticated = !!localStorage.getItem('token')

  if (!isAuthenticated && !excludedRoutes.includes(to.name)) {
    return { name: 'login' }
  }
})

export default router
