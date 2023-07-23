import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { createStripeCheckoutSession } from 'api'
// import { queryKeys } from '../queryKeys'

export const useCreateStripeCheckoutSessionMutation = () => {
  //   const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (product) => createStripeCheckoutSession({ product })
    // onSuccess: () => queryClient.invalidateQueries(queryKeys.userInvitation.requestList().queryKey)
  })
}
