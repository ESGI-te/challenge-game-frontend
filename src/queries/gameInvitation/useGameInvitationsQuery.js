import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getGameInvitations } from 'api'

export const useGameInvitationsQuery = () => {
  return useQuery({
    queryKey: queryKeys.userInvitation.list().queryKey,
    queryFn: () => getGameInvitations()
  })
}
