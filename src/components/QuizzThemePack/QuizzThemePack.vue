<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation'
import stripe from 'utils/stripe';
import styled from 'vue3-styled-components'
import Text from '@/components/Text'
import Button from '../Button'

import { defineProps, computed } from 'vue'

const props = defineProps({
  themePack : Object,
})

console.log(props.themePack);

const computedPrice = computed(() => {
  return props.themePack.price / 100
})


const SUCCESS_URL = `http://localhost:5173/payment/succes?session_id={CHECKOUT_SESSION_ID}&item_type=themepack`;
const CANCEL_URL = 'http://localhost:5173/payment/cancel';

const { mutate: createCheckoutSession, isLoading } = useCreateStripeCheckoutSessionMutation()

const handlePayment = () => {
  if (!props.themePack) return;
  const themePack = {
    ...props.themePack,
    itemType : "thempack", 
    quantity : 1,
    successUrl: SUCCESS_URL,
    cancelUrl: CANCEL_URL
  }
  createCheckoutSession(themePack, {
    onSuccess: (session) => {
      console.log(session);
      stripe.redirectToCheckout({ sessionId: session.id })
    }
  })
}


const Wrapper = styled.div`
  width: 100%;
  max-width : 550px
  display: flex;
  flex-direction: column;
  border: 1px solid;
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--black);
  background: center / contain no-repeat url('/img/themepack-illustration.png'), var(--white);
  padding: 1rem 2.5rem;
  gap: 0.5rem;
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`

const BuyButton = styled(Button)`
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`
</script>

<template>
  <Wrapper>
    <Card class="card">
      <InnerBox>
        <Text variant="h4">
          <b>{{ props.themePack.name }}</b>
        </Text>
        <Text variant="h4">
          <b> {{ computedPrice }}$</b>
        </Text>
      </InnerBox>

      <BuyButton bgColor="--yellow" @Click="handlePayment" :disabled="isLoading">
        <Text variant="p"> <b>Acheter</b> </Text>
      </BuyButton>
    </Card>
  </Wrapper>
</template>
