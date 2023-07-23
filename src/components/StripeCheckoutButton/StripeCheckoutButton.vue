<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation'
import { ref } from 'vue'
import stripe from 'utils/stripe'

const SUCCESS_URL = 'http://localhost:3000/success'
const CANCEL_URL = 'http://localhost:3000/cancel'

const isLoading = ref(false)
const createCheckoutSession = useCreateStripeCheckoutSessionMutation()

const props = defineProps({
    name : String,
    description : String,
    price : Number,
    quantity : Number
});


const handlePayment = () => {
  const product = {
    "name": props.name,
    "description": props.description,
    "price": props.price,
    "quantity": props.quantity,
    "success_url": SUCCESS_URL,
    "cancel_url": CANCEL_URL
  }
  isLoading.value = true
  createCheckoutSession.mutate(product, {
    onSuccess: (session) => {
      stripe.redirectToCheckout({ sessionId: session.id })
      isLoading.value = false
    }
  })
}
</script>

<template>
  <button @click="handlePayment">Pay</button>
</template>

<style lang=""></style>
