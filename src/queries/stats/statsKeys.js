import { createQueryKeys } from '@lukemorales/query-key-factory'

export const statsKeys = createQueryKeys('stats', {
  list: (filters) => [{ filters }],
})
