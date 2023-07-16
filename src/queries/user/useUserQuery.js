import { useQuery } from '@tanstack/vue-query'
import { queryKeys } from '../queryKeys'
import { getUser } from 'api'
import { useAuthStore } from '@/stores/auth.store'

export const useUserQuery = () => {
  const { token } = useAuthStore()

  if (!token) return

  return useQuery({
    queryKey: queryKeys.user.detail(token).queryKey,
    queryFn: () => getUser()
  })
}
