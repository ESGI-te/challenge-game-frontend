import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getInventory } from 'api'

export const useInventoryQuery = (inventoryId) => {
  if(!inventoryId) return
  return useQuery({
    queryKey: queryKeys.product.detail(inventoryId).queryKey,
    queryFn: () => getInventory(inventoryId)
  })
}