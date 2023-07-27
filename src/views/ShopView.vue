<script setup>
import { useProductsQuery } from 'queries/product/useProductsQuery.js'
import ProductForm from 'components/ProductForm'
import ProductProfilForm from 'components/ProductProfilForm'
import ProductThemeForm from 'components/ProductThemeForm'
import { computed } from 'vue';
import styled from 'vue3-styled-components';

const { data: products } = useProductsQuery();
const isEmpty = computed(() => products.value?.length === 0);

const StyledHeader = styled.header`
//   position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 72px;
  background-color: #466d79;
  top: 0;
  left: 0;
  z-index: 9999;
`
const Logo = styled.img`
  width: 85.75px;
  height: 40px;
`
const StyledBody = styled.body`

`;

const shopHeader = styled.div`
  display: flex; 
  align-items: center; 
  gap: 10px; 
  justify-content: space-between;
`;
const searchHeaderBar = styled.input`
padding: 8px 12px;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.2s ease-in-out;
  background-color: white;

  ::placeholder {
    color: #aaa;
  }
  
  :focus {
    border-color: #007bff;
  }
`;
</script>
<template>
    <StyledHeader>
        <Logo src="../../public/Logo.png" alt="Logo" />
    </StyledHeader>
        <div class="content">
    <StyledBody>
        <shopHeader>
            <h2>Shop</h2>
        <searchHeaderBar
        type="text"
        v-model="searchQuery"
        @input="handleSearch"
        placeholder="Search"/>
        >
        </shopHeader>
    <div class="card-container">
        <p v-if="isEmpty">No products</p>
        <ProductForm v-else v-for="product in products" :product="product" :key="product.id" class="grid-item"/>
    </div>
    <h2>Thèmes</h2>
    <div class="card-container3">
        <p v-if="isEmpty">No products</p>
        <ProductThemeForm v-else class="grid-item"/>
    </div>
    <h2>Avatars</h2>
    <div class="card-container2">
        <p v-if="isEmpty">No products</p>
        <ProductProfilForm v-else class="grid-item"/>
    </div>
    </StyledBody>
</div>
</template>
<style scoped>
    .card-container {
        display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      max-width: 50%;
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