import { createQueryKeys } from '@lukemorales/query-key-factory'

export const lobbyKeys = createQueryKeys('lobby', {
  detail: (lobbyId) => [lobbyId],
  list: (filters) => [{ filters }]
})
