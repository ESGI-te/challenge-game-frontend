import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getQuizzThemes } from 'api'

export const useQuizzThemesQuery = (quizzIds) => {
  console.log(quizzIds, quizzIds?.length)
  return useQuery({
    queryKey: queryKeys.quizzTheme.list().queryKey,
    queryFn: () => getQuizzThemes(quizzIds),
    enabled: !!quizzIds && Array.isArray(quizzIds) && quizzIds.length > 0
  })
}
