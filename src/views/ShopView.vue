<script setup>
import { useProductsQuery } from 'queries/product/useProductsQuery.js'
import ProductForm from 'components/ProductForm'
import { computed } from 'vue';

const { data: products } = useProductsQuery();
const isEmpty = computed(() => products.value?.length === 0);

</script>
<template>
    <h2>Shop</h2>
    <div>
        <p v-if="isEmpty">No products</p>
        <ProductForm v-else v-for="product in products" :product="product" :key="product.id" />
    </div>
</template>
<style lang="">
    
</style>