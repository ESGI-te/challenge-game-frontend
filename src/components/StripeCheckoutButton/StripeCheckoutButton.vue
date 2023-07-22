<script setup>
import { useCreateStripeCheckoutSessionMutation } from 'queries/stripeCheckoutSession/useCreateStripeCheckoutSessionMutation';
import { ref } from 'vue';
import stripe from 'utils/stripe';

const SUCCESS_URL = 'http://localhost:3000/success';
const CANCEL_URL = 'http://localhost:3000/cancel';

const isLoading = ref(false);
const createCheckoutSession = useCreateStripeCheckoutSessionMutation();

const handlePayment = () => {
    const products = [
        'test-product-id'
    ];
    isLoading.value = true;
    createCheckoutSession.mutate(products, {
        onSuccess: (session) => {
            stripe.redirectToCheckout({ sessionId: session.id });
            isLoading.value = false;
        },
    });
};

</script>

<template>
    <button @click="handlePayment">
        Pay
    </button>
</template>

<style lang="">
    
</style>