import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getStatsAverage } from 'api'

export const useStatsQuery = (days) => {
  return useQuery({
    queryKey: queryKeys.stats.list({days}).queryKey,
    queryFn: () => getStatsAverage(days),
    enabled: !!days
  })
}
