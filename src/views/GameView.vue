<template>
  <div class="game-view">
    <h1 v-if="game.data">{{ game.data.name }}</h1>
    <div class="players" v-if="game.data">
      <h2>Joueurs</h2>
      <ul>
        <li v-for="player in game.data.players" :key="player.id">
          {{ player.username }}: {{ player.score }} points, {{ player.lives }} vies
        </li>
      </ul>
    </div>
    <div v-if="game.data && game.currentQuestion" class="question">
      <h2>{{ game.currentQuestion.question }}</h2>
      <ul>
        <li v-for="(prop, index) in game.currentQuestion.propositions" :key="index">
          {{ prop }}
        </li>
      </ul>
    </div>
    <div v-else>
      <h2>Le jeu est terminé !</h2>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useGameQuery } from 'queries/game/useGameQuery'
import socket from '@/websockets/game.ws'
import { state as socketState } from '@/websockets/game.ws'

const { currentRoute } = useRouter()
const gameId = currentRoute.value.params.gameId

const game = reactive({ data: {}, currentQuestion: {} })
const { data: gameData } = useGameQuery(gameId)

watchEffect(() => {
  if (gameData.value) {
    Object.assign(game.data, gameData.value)
  }
  game.currentQuestion = socketState.currentQuestion
})

onMounted(() => {
  if (!gameId) return
  socket.io.opts.query = { gameId }
  socket.connect()

  socket.emit('start_game')

  socket.on('question', (question) => {
    console.log('Received question from socket: ', question)
    game.currentQuestion = question // Update here
  })
  socket.on('notification', (notification) => {
    console.log(notification)
  })
})

onUnmounted(() => {
  socket.disconnect()
})
</script>

<style scoped>
/* Your CSS styles remain the same */
</style>
