<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation'
import stripe from 'utils/stripe';
import styled from 'vue3-styled-components';

const props = defineProps({
  product: Object
})
const SUCCESS_URL = 'http://localhost:5173/payment/succes?session_id={CHECKOUT_SESSION_ID}';
const CANCEL_URL = 'http://localhost:5173/payment/cancel';
const { mutate: createCheckoutSession, isLoading } = useCreateStripeCheckoutSessionMutation()

const handlePayment = () => {
  if (!props.product) return;
  const product = {
    ...props.product,
    successUrl: SUCCESS_URL,
    cancelUrl: CANCEL_URL
  }
  createCheckoutSession(product, {
    onSuccess: (session) => {
      stripe.redirectToCheckout({ sessionId: session.id })
    }
  })
}
const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

</script>

<template>
  <Card>
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <button :disabled="isLoading" @click="handlePayment">Buy</button>
  </Card>
</template>

<style scoped>
</style>
