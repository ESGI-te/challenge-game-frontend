import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { declineGameInvitation } from 'api'
import { queryKeys } from '../queryKeys'

export const useDeclineGameInvitationMutation = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (invitationId) => declineGameInvitation(invitationId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: queryKeys.userInvitation.list().queryKey })
  })
}
