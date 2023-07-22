import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getGameInvitation } from 'api'

export const useGameInvitationsQuery = (invitationId) => {
  if (!invitationId) return

  return useQuery({
    queryKey: queryKeys.gameInvitation.detail(invitationId).queryKey,
    queryFn: () => getGameInvitation(invitationId)
  })
}
