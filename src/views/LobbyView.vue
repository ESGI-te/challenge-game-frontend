<script setup>
import { computed, onMounted, onUnmounted } from 'vue';
import LobbyChat from 'components/LobbyChat';
import { useRouter } from 'vue-router';
import LobbyFriendsInvitation from 'components/LobbyFriendsInvitation';
import socket, { state } from '@/websockets/lobby.ws';

const { currentRoute } = useRouter()
const code = currentRoute.value.params.code;
const playersConnected = computed(() => `${state.lobby?.players.length} / ${state.lobby?.playersMax}`);

onMounted(() => {
	if (!code) return
	socket.io.opts.query = { code };
	socket.connect();
})

onUnmounted(() => {
	socket.disconnect();
})

</script>

<template>
	<div v-if="state.connected && !state.error">
		<div>
			notification : {{ state.notification }}
			players connected : {{ playersConnected }}
		</div>
		<LobbyFriendsInvitation />
		<LobbyChat />
	</div>
	<h2 v-else-if="state.error">{{ state.error }}</h2>
	<h2 v-else>Is loading...</h2>
</template>

<style lang="">
    
</style>