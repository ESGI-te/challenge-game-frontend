import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAuthStore } from '@/stores/auth.store'
import { storeToRefs } from 'pinia'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

/* Navigation Guard */
router.beforeEach(async (to, from) => {
  const { isAuthenticated, returnUrl } = storeToRefs(useAuthStore())
  const publicRoutes = ['login', 'register']

  if (!isAuthenticated.value && !publicRoutes.includes(to.name)) {
    returnUrl.value = to.fullPath
    return { name: 'login' }
  }
})

export default router
