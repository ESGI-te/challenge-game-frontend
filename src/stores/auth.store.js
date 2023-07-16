import { login } from '@/api'
import router from '@/router'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: localStorage.getItem('token') || null,
    returnUrl: null,
    isAuthenticated: false
  }),
  actions: {
    async login(credentials) {
      try {
        const { token } = await login(credentials)

        this.token = token
        this.isAuthenticated = true

        localStorage.setItem('token', token)

        router.push(this.returnUrl || { name: 'home' })
      } catch (error) {
        console.log(error)
      }
    },
    logout() {
      this.token = null
      this.isAuthenticated = false
      localStorage.removeItem('token')
      router.push({ name: 'login' })
    }
  }
})
