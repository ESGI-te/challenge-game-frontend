import { useQuery } from '@tanstack/vue-query'
import { getLobbyByCode } from 'api'
import { queryKeys } from '../queryKeys'

export const useLobbyByCodeQuery = (code, config = {}) => {
  return useQuery({
    queryKey: queryKeys.lobby.detail(code).queryKey,
    queryFn: () => getLobbyByCode(code),
    enabled: false,
    ...config
  })
}
