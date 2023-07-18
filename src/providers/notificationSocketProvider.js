import { useAuthStore } from '@/stores/auth.store'
import { io } from 'socket.io-client'
import { WS_USERS_NAMESPACE } from 'utils/constants'
import { provide } from 'vue'

export const notificationSocketProvider = () => {
  const { token } = useAuthStore()

  const URL = import.meta.env.VITE_WS_URL + WS_USERS_NAMESPACE

  const socket = io(URL, {
    // reconnectionDelayMax: 10000,
    auth: {
      token
    }
  })

  provide('notificationSocket', socket)

  return socket
}
