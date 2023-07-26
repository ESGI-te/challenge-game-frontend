import { reactive } from 'vue'
import { io } from 'socket.io-client'
import { WS_GAME_NAMESPACE } from '@/utils/constants'

export const state = reactive({
  connected: false,
  error: null
})

const URL = import.meta.env.VITE_WS_URL + WS_GAME_NAMESPACE

const socket = io(URL, {
  // reconnectionDelayMax: 10000,
  autoConnect: false,
  forceNew: true,
  auth: {
    token: localStorage.getItem('token')
  }
})

socket.on('connect', () => {
  state.connected = true
  socket.emit('start_game')
})

socket.on('disconnect', () => {
  state.connected = false
})
socket.on('score_updated', (updatedScore) => {
  // Update the UI with the new score
  // Example: Display the score in a DOM element with id "scoreElement"
  document.getElementById('scoreElement').innerText = updatedScore
})
socket.on('question', (question) => {
  state.currentQuestion = question
})

socket.on('connect_error', (err) => {
  console.error(err.message)
  state.error = err.message
})

socket.on('error', (err) => {
  state.error = err
  console.log(err)
})

export default socket
