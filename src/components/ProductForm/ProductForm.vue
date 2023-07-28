<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation'
import stripe from 'utils/stripe';
import Button from 'components/Button'
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
  // flex-direction: row;
  width: 100%;
  heigth: 12 rem;
  align-items: center;
  justify-content: space-evenly;
  row-gap: 1rem;
  border: 1px solid #ccc;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;card-title
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
const cardContent = styled.div`
display: flex;
  flex-direction: column;
`
</script>

<template>
  <div class="grid-item">
    <Card>
      <cardContent>
        <h3>{{ product.name }}</h3>
        <h3>{{ product.price / 100 }} € </h3>
      </cardContent>
      <img src="../../../public/icons/themes/theme1.png" alt="Card Image" />
      <Button :disabled="isLoading" @click="handlePayment">Buy</Button>
    </Card>
</div>
</template>

<style scoped>

  
</style>
