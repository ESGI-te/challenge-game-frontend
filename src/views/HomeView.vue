<script setup>
import StripeCheckoutButton from '@/components/StripeCheckoutButton';

</script>

<template>
  <h2>Home</h2>
  <StripeCheckoutButton 
  :name="'propsName'"
  :description="'this is a description'"
  :price="2000"
  :quantity="1"
  ></StripeCheckoutButton>
</template>
