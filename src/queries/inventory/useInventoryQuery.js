import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getInventory } from 'api'

export const useInventoryQuery = () => {
  return useQuery({
    queryKey: queryKeys.product.list().queryKey,
    queryFn: () => getInventory()
  })
}
