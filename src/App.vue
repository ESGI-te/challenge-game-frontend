<script setup>
import { RouterView } from 'vue-router'
import friendsSocket from './websockets/friends.ws'
import notificationSocket from './websockets/notification.ws'
import { watchEffect } from 'vue'
import { useAuthStore } from './stores/auth.store'
import { useUserQuery } from 'queries/user/useUserQuery'
import { ThemeProvider } from 'vue3-styled-components'
import theme from 'utils/theme'

import './assets/main.css'

const authStore = useAuthStore()
const { data: user } = useUserQuery()

watchEffect(() => {
  if (!user.value) return
  authStore.setUserRoles(user.value.roles)
})

watchEffect(() => {
  if (!authStore.isAuthenticated) return
  friendsSocket.auth = { token: authStore.token }
  notificationSocket.auth = { token: authStore.token }
  friendsSocket.connect()
  notificationSocket.connect()
})
</script>

<template>
  <ThemeProvider :theme="theme">
    <component :is="$route.meta.layout || 'div'">
      <RouterView />
    </component>
  </ThemeProvider>
</template>

<style scoped></style>
