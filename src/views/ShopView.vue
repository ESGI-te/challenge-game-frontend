<script setup>
import { useProductsQuery } from 'queries/product/useProductsQuery.js'
import ProductForm from 'components/ProductForm'
import { computed } from 'vue';

const { data: products } = useProductsQuery();
const isEmpty = computed(() => products.value?.length === 0);
</script>
<template>
    <h2>Shop</h2>
    <div class="card-container">
        <p v-if="isEmpty">No products</p>
        <ProductForm v-else v-for="product in products" :product="product" :key="product.id" class="grid-item"/>
    </div>
    <h2>Thèmes</h2>
    <div class="card-container3">
        <p v-if="isEmpty">No products</p>
        <ProductForm v-else v-for="product in products" :product="product" :key="product.id" class="grid-item"/>
    </div>
    <h2>Avatars</h2>
    <div class="card-container2">
        <p v-if="isEmpty">No products</p>
        <ProductForm v-else v-for="product in products" :product="product" :key="product.id" class="grid-item"/>
    </div>
</template>
<style scoped>
    h2 {
        color: purple !important;
    }
    .grid-container {
        background-color: red !important;
    }
    .card-container {
        display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 800px;
      /* background-color: white; */
    }
    .card-container2 {
        display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 100%;
    }

    .card-container3 {
        display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      max-width: 100%;
    }
</style>