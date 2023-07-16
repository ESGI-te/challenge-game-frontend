<template>
  <h2 v-if="isLoading">Is loading...</h2>
  <h2 v-else-if="!lobby">Lobby not found.</h2>
  <div v-else-if="isConnected">
    <div>
      connected : {{ isConnected }}
      notification : {{ notification }}
      players connected : {{ playersConnected }}
    </div>
    <LobbyChat />
  </div>
</template>

<script setup>
import { computed, onUnmounted, reactive, ref, watch } from 'vue';
import LobbyChat from 'components/LobbyChat';
import { useLobbyQuery } from 'queries/lobby/useLobbyQuery';
import { useRouter } from 'vue-router';
import { lobbySocketProvider } from '@/providers/lobbySocketProvider';

const { currentRoute } = useRouter()
const lobbyId = currentRoute.value.params.lobbyId;
const { data: lobby, isLoading } = useLobbyQuery(lobbyId);
// const socket = lobbySocketProvider(lobbyId);
const notification = reactive({});
const error = reactive({});
const isConnected = ref(false);
const players = ref([]);
const playersConnected = computed(() => `${players.value.length} / ${lobby?.value.playersMax}`);

watch(lobby, () => {
  if(!lobby) return

  const socket = lobbySocketProvider(lobbyId);

  socket.on('connect', () => {
    isConnected.value = true;
  })

  socket.on('connect_error', (err) => {
    console.error(err.message)
    error.value = err;
  })

  socket.on('disconnect', () => {
    isConnected.value = false;
  })

  socket.on('notification', (msg) => {
    notification.value = msg;
  })

  socket.on('players', (playersArr) => {
    players.value = playersArr;
  })
})


</script>

<style lang="">
    
</style>