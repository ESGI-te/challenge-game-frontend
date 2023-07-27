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
  // display: flex;
  // flex-direction: row;
  width: 25rem;
  heigth: 12 rem;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
  border: 1px solid #ccc;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;card-title
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

</script>

<template>
  <Card>
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <p>{{ product.price / 100 }} € </p>
    <button :disabled="isLoading" @click="handlePayment">Buy</button>
  </Card>
</template>

<style scoped>
  button {
    background-color: gray ;
    border: solid 1px;
  }
  h3 {
    font-size: 18px;
      font-weight: bold;
      margin-bottom: 10px;
      text-transform: uppercase;
  }

  button {
      display: inline-block;
      padding: 10px 20px;
      font-size: 16px;
      font-weight: bold;
      text-align: center;
      text-decoration: none;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: #fff;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }

    /* Styles additionnels au survol du bouton */
    button:hover {
      background-color: #0056b3;
    }

    /* Styles additionnels lorsque le bouton est cliqué */
    button:active {
      transform: translateY(1px);
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
</style>
