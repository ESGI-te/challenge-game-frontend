<script setup>
import {useProductsQuery} from 'queries/product/useProductQuery.js'
const { data: product} = useProductsQuery();
// import products
// import state
// import vue router

</script>

<template>
  <div>
    Boutique
    <p v-if="!Product">La Boutique est vide</p>
    <div v-else v-for="product in products" :key="product.id">
      <p>{{ product.nom }}</p>
      <p>{{ product.description }}</p>
      <p>{{ product.prix }}</p>
      <button @click="console.log('achat')">Acheter</button>
    </div>
  </div>

</template>

<style scoped></style>
