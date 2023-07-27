<template>
  <div class="game-view">
    <h1 v-if="game.data">{{ game.data.name }}</h1>

    <!-- Section pour afficher la question actuelle et les propositions -->
    <div class="current-question" v-if="game.currentQuestion">
      <h2>Question actuelle</h2>
      <p>{{ game.currentQuestion.question }}</p>
      <p>Temps restant : {{ game.remainingTime }}</p>

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
    <div v-else>
      <h2>Le jeu est terminé !</h2>
    </div>
    <div class="players" v-if="game.data">
      <h2>Joueurs</h2>
      <ul>
        <li v-for="player in game.data.players" :key="player.id">
          {{ player.username }}: {{ player.score }} points, {{ player.lives }} vies
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useGameQuery } from 'queries/game/useGameQuery'
import socket from '@/websockets/game.ws'
import { state as socketState } from '@/websockets/game.ws'
import { ref } from 'vue'

const isAnswered = ref(false)

const { currentRoute } = useRouter()
const code = currentRoute.value ? currentRoute.value.params.code : null
const game = reactive({ data: {}, currentQuestion: {}, remainingTime: 0 })
const { data: gameData } = useGameQuery(code)

const submitAnswer = (answer) => {
  socket.emit('answer', {
    gameId: game.data._id,
    questionId: game.currentQuestion.id,
    answer: answer
  })
  isAnswered.value = true
  console.log(answer)
}

watchEffect(() => {
  if (gameData.value) {
    Object.assign(game.data, gameData.value)
    // Game data is ready, request remaining time
    socket.emit('request_remaining_time', {
      gameId: game.data._id
    })
  }
  game.currentQuestion = socketState.currentQuestion
})

onMounted(() => {
  if (!code) return
  socket.io.opts.query = { code }
  console.log('voici le code', code)
  socket.connect()

  socket.emit('start_game')

  socket.on('question', (question) => {
    console.log('Received question from socket: ', question)
    if (question) {
      game.currentQuestion = question
      game.remainingTime = question.remainingTime
      isAnswered.value = false
      if (question.remainingTime === null) {
        console.log('Remaining time is null, requesting remaining time from server...')
        socket.emit('request_remaining_time', {
          gameId: game.data._id,
          questionId: game.currentQuestion.id
        })
      }
    } else {
      console.log('Received null question from socket')
    }
  })

  socket.on('notification', (notification) => {
    console.log(notification)
  })

  socket.on('score_updated', (updatedScore) => {
    game.data.players = game.data.players.map((player) => {
      if (player.id === updatedScore.playerId) {
        player.score = updatedScore.score
      }
      return player
    })
  })

  socket.on('remaining_time', (remainingTime) => {
    console.log('Received remaining time from socket: ', remainingTime)
    game.remainingTime = remainingTime
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
  color: black;
}

.current-question p {
  color: black;
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
  color: black;
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
