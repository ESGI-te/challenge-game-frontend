import { createQueryKeys } from '@lukemorales/query-key-factory'

export const inventoryKeys = createQueryKeys('inventory', {
  detail: (inventoryId) => [inventoryId],
  list: (filters) => [{ filters }]
})