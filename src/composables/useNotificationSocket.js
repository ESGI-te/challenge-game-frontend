import { inject } from 'vue'

export const useNotificationSocket = () => {
  const socket = inject('notificationSocket')

  return socket
}
