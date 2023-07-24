<template>
  <div class="game-view">
    <h1 v-if="game.data">{{ game.data.name }}</h1>

    <!-- Section pour afficher la question actuelle et les propositions -->
    <div class="current-question" v-if="game.currentQuestion">
      <h2>Question actuelle</h2>
      <p>{{ game.currentQuestion.question }}</p>
      <div class="propositions">
        <button
          class="proposition"
          v-for="(proposition, index) in game.currentQuestion.propositions"
          :key="index"
          :disabled="isAnswered"
          @click="submitAnswer(proposition)"
        >
          {{ proposition }}
        </button>
      </div>
    </div>

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
  if (!code) return
  socket.io.opts.query = { code }
  if (!gameId) return
  socket.io.opts.query = { gameId }
  socket.connect()

  socket.emit('start_game')

  socket.on('question', (question) => {
    console.log('Received question from socket: ', question)
    game.currentQuestion = question
    isAnswered.value = false
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
.game-view {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
}

.current-question {
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

.current-question h2 {
  margin-bottom: 10px;
}

.current-question p {
  font-size: 1.2em;
  margin-bottom: 10px;
}

.propositions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.proposition {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.proposition:hover {
  background-color: #0056b3;
}

.players {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
}

.players h2 {
  margin-bottom: 10px;
}

.player-card {
  background-color: #f0f0f0;
  margin: 10px 0;
  padding: 15px;
  border-radius: 5px;
}
</style>
