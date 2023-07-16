import { login } from '@/api'
import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: localStorage.getItem('token') || null,
    returnUrl: null,
    isAuthenticated: !!localStorage.getItem('token') // Mettre à jour ici
  }),
  actions: {
    async login(credentials) {
      try {
        const { token } = await login(credentials)

        if (!token) return

        this.token = token
        this.isAuthenticated = true

        localStorage.setItem('token', token)

        router.push(this.returnUrl || { name: 'home' })
        this.returnUrl = null
      } catch (error) {
        console.log(error)
      }
    },
    logout() {
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    },
    setReturnUrl(url) {
      this.returnUrl = url
    }
  }
})
