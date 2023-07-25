import { createQueryKeys } from '@lukemorales/query-key-factory'

export const productKeys = createQueryKeys('product', {
  detail: (productId) => [productId],
  list: (filters) => [{ filters }]
})
