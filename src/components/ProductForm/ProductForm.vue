<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation'
import stripe from 'utils/stripe';

const props = defineProps({
  product: Object
})
const SUCCESS_URL = 'http://localhost:5173/payment/succes';
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

</script>

<template>
  <div>
    <p>{{ product.name }}</p>
    <p>{{ product.description }}</p>
    <p>{{ product.price }}</p>
    <button :disabled="isLoading" @click="handlePayment">Buy</button>
  </div>
</template>

<style scoped></style>
