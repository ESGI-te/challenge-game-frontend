import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { inviteToGame } from 'api'
import { queryKeys } from '../queryKeys'

export const useInviteToGameMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ userId, lobbyId }) => inviteToGame({ userId, lobbyId }),
    onSuccess: () => queryClient.invalidateQueries(queryKeys.userInvitation.requestList().queryKey)
  })
}
