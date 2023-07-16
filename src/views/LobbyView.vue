<template>
  <div v-if="isConnected && !error">
    <div>
      connected : {{ isConnected }}
      notification : {{ notification }}
      players connected : {{ playersConnected }}
    </div>
    <LobbyChat />
  </div>
  <h2 v-else-if="error">{{ error }}</h2>
  <h2 v-else>Is loading...</h2>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import LobbyChat from 'components/LobbyChat';
import { useRouter } from 'vue-router';
import { lobbySocketProvider } from '@/providers/lobbySocketProvider';

const { currentRoute } = useRouter()
const lobbyId = currentRoute.value.params.lobbyId;
const notification = reactive({});
const error = ref('');
const isConnected = ref(false);
const lobby = reactive({});
const playersConnected = computed(() => `${lobby?.value?.players.length} / ${lobby?.value?.playersMax}`);

const socket = lobbySocketProvider(lobbyId);

socket.on('connect', () => {
  isConnected.value = true;
})

socket.on('lobby', (data) => {
  lobby.value = data;
})

socket.on('connect_error', (err) => {
  console.error(err.message)
  error.value = err.message;
})

socket.on('error', (err) => {
  error.value = err;
  console.log(err)
})

socket.on('disconnect', () => {
  isConnected.value = false;
})

socket.on('notification', (msg) => {
  notification.value = msg;
})

</script>

<style lang="">
    
</style>