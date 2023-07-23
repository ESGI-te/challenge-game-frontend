<script setup>
import { RouterView } from 'vue-router'
import friendsSocket from './websockets/friends.ws';
import notificationSocket from './websockets/notification.ws';
import { onMounted, onUnmounted } from 'vue';
import { useAuthStore } from './stores/auth.store';

const { isAuthenticated } = useAuthStore();

onMounted(() => {
  if (!isAuthenticated.value) return;
  friendsSocket.connect();
  notificationSocket.connect();
})

onUnmounted(() => {
  friendsSocket.disconnect();
  notificationSocket.disconnect();
})

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
