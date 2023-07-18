<script setup>
import { RouterView } from 'vue-router'
import { notificationSocketProvider } from './providers/notificationSocketProvider';
import { useAuthStore } from './stores/auth.store';
import { watchEffect } from 'vue';
import { storeToRefs } from 'pinia';

const { isAuthenticated } = storeToRefs(useAuthStore());

watchEffect(() => {
  if(!isAuthenticated.value) return
  const socket = notificationSocketProvider();

  socket.on('receive_invitation', (username) => {
    console.log(username);
  })
})


</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
