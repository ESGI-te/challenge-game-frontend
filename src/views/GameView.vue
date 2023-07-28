je dois refresh avant d'avoir l'affichage de mes question et de mon temps
<template>
  <div class="game-view">
    <h1 v-if="game.data">{{ game.data.name }}</h1>
    <div class="current-question" v-if="game.currentQuestion">
      <p>GAME{{ game.code }}</p>

      <div class="codeButton">
        <LeaveButton @click="handleLeaveLobby"> QUITTER LA ROOM </LeaveButton>
        <img
          src="../../public/img/Friend.png"
          alt="friends"
          class="friends-list"
          @click="togglePlayerColumn"
        />
      </div>
      <p>{{ game.currentQuestion.question }}</p>
      <div class="question-info">
        <div class="time-zone">
          <img src="../../public/icons/chrono.png" alt="Chronometer" class="chrono" />
          <p>{{ game.remainingTime }}</p>
        </div>
        <p>? {{ game.currentQuestion.id }} /30</p>
      </div>
      <div class="time-bar-container">
        <div class="time-bar" :style="{ width: timeBarWidth }"></div>
      </div>
      <div class="propositions">
        <div
          class="proposition"
          v-for="(proposition, index) in game.currentQuestion.propositions"
          :key="index"
          @click="updateSelectedProposition(index)"
        >
          <input
            type="checkbox"
            :id="`checkbox${index}`"
            :value="proposition"
            :checked="selectedProposition === proposition"
            @change="handleCheckboxChange"
          />
          <label :for="`checkbox${index}`">{{ proposition }}</label>
        </div>
      </div>
      <button @click="submitAnswer" :disabled="isAnswered">Valider</button>
    </div>
    <div v-else>
      <h2>Le jeu est terminé !</h2>
    </div>
    <div class="players" v-if="game.data" v-show="isPlayerColumnVisible">
      <div class="playerBoard">
        <h2>Joueurs</h2>
        <h2>({{ game.data.players?.length }})</h2>
      </div>
      <div class="player-card" v-for="player in game.data.players" :key="player.id">
        <img src="../../public/img/avatar-1.svg" alt="Player Image" class="player-image" />
        <div class="player-info">
          <h3>{{ player.username }}</h3>
          <p>{{ player.score }} P</p>
          <p>
            <span
              :class="{
                online: player.status === 'En ligne',
                offline: player.status !== 'En ligne'
              }"
              >{{ 'En ligne' }}</span
            >
          </p>
          <div class="lives">
            <img
              v-for="(life, index) in Array(player.lives).fill()"
              :key="index"
              src="../../public/icons/heart-solid.svg"
              alt="Heart"
              class="heart"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from 'components/Button'
import styled from 'vue3-styled-components'
import { onMounted, onUnmounted, reactive, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useGameByCodeQuery } from 'queries/game/useGameByCodeQuery'
import socket from '@/websockets/game.ws'
import { state as socketState } from '@/websockets/game.ws'
import { ref } from 'vue'
const isAnswered = ref(false)
const timeBarWidth = ref('100%')
const { currentRoute, replace } = useRouter()
const code = currentRoute.value.params.code
const game = reactive({ data: {}, currentQuestion: {}, remainingTime: 0 })
const { data: gameData } = useGameByCodeQuery(code)
const selectedProposition = ref(null)
const handleCheckboxChange = () => {}
const updateSelectedProposition = (index) => {
  const clickedProposition = game.currentQuestion.propositions[index]

  // Check if the clicked proposition is already selected
  if (selectedProposition.value === clickedProposition) {
    selectedProposition.value = null
  } else {
    selectedProposition.value = clickedProposition
  }
}
const isPlayerColumnVisible = ref(true)
const togglePlayerColumn = () => {
  isPlayerColumnVisible.value = !isPlayerColumnVisible.value
}
const LeaveButton = styled(Button)`
  width: 100% !important;
  margin-bottom: 1rem;
  background-color: var(--red) !important;
`
const submitAnswer = () => {
  if (selectedProposition.value) {
    socket.emit('answer', {
      gameId: game.data._id,
      questionId: game.currentQuestion.id,
      answer: selectedProposition.value
    })
    isAnswered.value = true
    console.log(selectedProposition.value)
  }
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
  if (game.currentQuestion && game.remainingTime !== null) {
    const totalTime = 15
    const remainingTimePercentage = (game.remainingTime / totalTime) * 100
    timeBarWidth.value = `${remainingTimePercentage}%`
  }
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
const handleLeaveLobby = () => {
  socket.disconnect()
  replace({ name: 'home' })
}

onUnmounted(() => {
  socket.disconnect()
})
</script>
<style scoped>
.question-info {
  display: flex;
  justify-content: center;
}
.time-zone {
  width: 25%;
  display: flex;
  max-height: 39px;
  display: flex;
  align-items: center;
}
.codeButton {
  display: flex;
}
.proposition {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 5px;
}

.heart {
  height: 20px;
  width: 20px;
}
.time-bar-container {
  width: 100%;
  height: 10px;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
}
.friends-list {
  margin-left: 17px;
  height: 58px;
}
.time-bar {
  height: 100%;
  background-color: #467966;
  border-radius: 5px;
  transition: width 1s linear;
}

input[type='checkbox'] {
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid black;
  border-radius: 4px;
  cursor: pointer;
}
.playerBoard {
  display: flex;
  justify-content: space-between;
}
input[type='checkbox']:checked {
  background-color: #467966;
}

label {
  color: #000;
}

.propositions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-bottom: 1rem;
  margin-top: 1rem;
}

button {
  background-color: #466d79;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 0px;
  width: 100%;
  height: 58px;
  cursor: pointer;
}

.chrono {
  height: 25px;
  width: 25px;
  margin-right: 5px;
}
.current-question {
  margin-bottom: 20px;
  border-radius: 10px;
}

.current-question h2 {
  margin-bottom: 10px;
  text-wrap: balance;
  color: black;
  font-size: 24px;
  display: flex;
  justify-content: center;
}
.current-question h2 {
  margin-bottom: 1rem;
}
.current-question p {
  color: black;
  font-size: 24px;
  font-weight: bold;
  display: flex;
  text-align: center;
}
.game-view {
  padding: 20px;
}
.proposition {
  background-color: white;
  color: #fff;
  padding: 10px 10px;
  display: flex;
  border: black solid 1px;
  height: 58px;
  gap: 10px;
  cursor: pointer;
}

.players {
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

.player-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  border: #000 1px solid;
}

.player-image {
  width: 30%;
}

.player-info {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.online {
  color: green;
}

.offline {
  color: green;
}
@media (min-width: 1024px) {
  .game-view {
    display: flex;
    justify-content: space-between;
    height: 100vh;
    padding: 20px;
  }
  .friends-list {
    display: none;
  }
  .player-card {
    margin: 0;
    margin-bottom: 1rem;
  }
  .current-question {
    width: 70%;
    margin-right: 20px;
  }

  .players {
    flex: 1;
    max-width: 40%;
  }
}
</style>
