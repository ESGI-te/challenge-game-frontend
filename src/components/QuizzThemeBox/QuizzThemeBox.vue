<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation'
import stripe from 'utils/stripe';
import styled from 'vue3-styled-components'
import Text from '@/components/Text'
import { defineProps, computed } from 'vue'

const props = defineProps({
  theme : Object,
})

const computedPrice = computed(
  () => {return props.theme.price / 100}
)

const randomColor = () => ['yellow', 'primary', 'blue'][Math.floor(Math.random() * 3)];

const SUCCESS_URL = `http://localhost:5173/payment/succes?session_id={CHECKOUT_SESSION_ID}&item_type=theme`;
const CANCEL_URL = 'http://localhost:5173/payment/cancel';

const { mutate: createCheckoutSession, isLoading } = useCreateStripeCheckoutSessionMutation()

const handlePayment = () => {
  if (!props.theme) return;
  const theme = {
    ...props.theme,
    itemType : "them", 
    quantity : 1,
    successUrl: SUCCESS_URL,
    cancelUrl: CANCEL_URL
  }
  createCheckoutSession(theme, {
    onSuccess: (session) => {
      console.log(session);
      stripe.redirectToCheckout({ sessionId: session.id })
    }
  })
}


const Box = styled.div`
  width: 8.75rem;
  height: 8.75rem;
  display: flex;
  background: center / 50% no-repeat url('/img/theme-illustration.png'), var(--${randomColor()});
  padding: 1rem;
  align-items: end;
  justify-content: space-between;
  border: 2px solid var(--Black, #111);
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    width: 14rem;
    background-size: 30%;
  }
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
</script>

<template>
  <Box @Click="handlePayment" :disabled="isLoading">
    <Text variant="p" color="--white"> <b> {{ props.theme.name }} </b> </Text>
    <Text variant="p" color="--white"> <b> {{ computedPrice }}$ </b> </Text>
  </Box>
</template>
