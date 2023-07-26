<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import LobbyChat from 'components/LobbyChat'
import { useRouter } from 'vue-router'
import LobbyFriendsInvitation from 'components/LobbyFriendsInvitation'
import socket, { state } from '@/websockets/lobby.ws'
import { useLobbyByCodeQuery } from 'queries/lobby/useLobbyByCodeQuery'
import LobbyQuizzThemeVote from 'components/LobbyQuizzThemeVote'
import { useUserQuery } from 'queries/user/useUserQuery'
import LobbyValidation from 'components/LobbyValidation'

const { currentRoute, push } = useRouter()
const code = currentRoute.value.params.code
const { data: lobby } = useLobbyByCodeQuery(code)
const { data: user } = useUserQuery()
const playersConnected = computed(
  () => `${state?.players?.length} / ${lobby.value?.settings?.playersMax}`
)
const isOwner = computed(() => lobby.value?.owner === user.value?._id)
const votedTheme = computed(() => lobby?.value?.votedTheme || state.votedTheme)

onMounted(() => {
  if (!code) return
  socket.io.opts.query = { code }
  socket.connect()
})

onUnmounted(() => {
  socket.disconnect()
})

const startValidation = () => {
  if (!isOwner.value || !lobby.value || !state.votedTheme) return
  socket.emit('start_validation', { lobbyId: lobby.value._id })
}

socket.on('game_created', (gameCode) => {
  push({ name: 'game', params: { code: gameCode } })
})
</script>

<template>
  <div v-if="state.connected && !state.error">
    <div v-if="state.gameCreationInProgress">
      <h2>The game's about to get started...</h2>
    </div>
    <div v-else>
      <div>notification : {{ state.notification }} players connected : {{ playersConnected }}</div>
      <LobbyValidation v-if="state.isValidationInProgress" :isOwner="isOwner" :lobbyId="lobby.id" />
      <button v-else-if="isOwner" :disabled="!votedTheme" @click="startValidation">
        Start game
      </button>
      <LobbyQuizzThemeVote v-if="!!lobby?.themes" :themes="lobby?.themes" />
      <LobbyFriendsInvitation />
      <LobbyChat />
    </div>
  </div>
  <h2 v-else-if="state.error">{{ state.error }}</h2>
  <h2 v-else>Is loading...</h2>
</template>

<style lang=""></style>
