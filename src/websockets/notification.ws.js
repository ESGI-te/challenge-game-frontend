import { reactive } from 'vue'
import { io } from 'socket.io-client'
import { WS_USERS_NAMESPACE } from '@/utils/constants'

export const state = reactive({
  connected: false,
  error: null,
  lastGameInvitation: null
})

const URL = import.meta.env.VITE_WS_URL + WS_USERS_NAMESPACE

const socket = io(URL, {
  // reconnectionDelayMax: 10000,
  autoConnect: false,
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

socket.on('receive_user_invitation', (username) => {
  console.log(username)
})

socket.on('receive_game_invitation', (invitation) => {
  state.lastGameInvitation = invitation
})

export default socket
