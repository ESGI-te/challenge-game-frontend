<script setup>
import { RouterView } from 'vue-router'
import friendsSocket from './websockets/friends.ws';
import { onMounted } from 'vue';

// onMounted(() => {
//   friendsSocket.connect();
// })

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
