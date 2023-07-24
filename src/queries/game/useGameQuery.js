import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getGame } from 'api'

export const useGameQuery = (gameId) => {
  return useQuery({
    queryKey: queryKeys.game.detail(gameId).queryKey,
    queryFn: () => getGame(gameId)
  })
}
