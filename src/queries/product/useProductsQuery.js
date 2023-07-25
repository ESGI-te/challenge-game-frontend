import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getProducts } from 'api'

export const useProductsQuery = () => {
  return useQuery({
    queryKey: queryKeys.product.list().queryKey,
    queryFn: () => getProducts()
  })
}
