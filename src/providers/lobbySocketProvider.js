import { useAuthStore } from '@/stores/auth.store'
import { io } from 'socket.io-client'
import { WS_LOBBY_NAMESPACE } from 'utils/constants'
import { provide } from 'vue'

export const lobbySocketProvider = (lobbyId) => {
  const { token } = useAuthStore()

  if (!lobbyId) return

  const URL = import.meta.env.VITE_WS_URL + WS_LOBBY_NAMESPACE

  const socket = io(URL, {
    // reconnectionDelayMax: 10000,
    auth: {
      token
    },
    query: {
      lobbyId
    }
  })
  provide('lobbySocket', socket)

  return socket
}
