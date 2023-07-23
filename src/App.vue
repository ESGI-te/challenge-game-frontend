<script setup>
import { RouterView } from 'vue-router'
import friendsSocket from './websockets/friends.ws';
import notificationSocket from './websockets/notification.ws';
import { watchEffect } from 'vue';
import { useAuthStore } from './stores/auth.store';

const authStore = useAuthStore();

watchEffect(() => {
  if (!authStore.isAuthenticated) return
  friendsSocket.auth = { token: authStore.token };
  notificationSocket.auth = { token: authStore.token };
  friendsSocket.connect();
  notificationSocket.connect();
});

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
