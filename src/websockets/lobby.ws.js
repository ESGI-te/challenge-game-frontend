import { reactive } from 'vue'
import { io } from 'socket.io-client'
import { WS_LOBBY_NAMESPACE } from '@/utils/constants'

export const state = reactive({
  connected: false,
  notification: null,
  lobby: null,
  error: null,
  messages: []
})

const URL = import.meta.env.VITE_WS_URL + WS_LOBBY_NAMESPACE

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
})

socket.on('disconnect', () => {
  state.connected = false
})

socket.on('lobby', (data) => {
  state.lobby = data
})

socket.on('connect_error', (err) => {
  console.error(err.message)
  state.error = err.message
})

socket.on('error', (err) => {
  state.error = err
  console.log(err)
})

socket.on('notification', (msg) => {
  state.notification = msg
})

socket.on('message', (msg) => {
  state.messages.push(msg)
})

export default socket
