<script setup>
import { useProductsQuery } from 'queries/product/useProductsQuery.js'
import ProductForm from 'components/ProductForm'
import ProductProfilForm from 'components/ProductProfilForm'
import ProductThemeForm from 'components/ProductThemeForm'
import { computed } from 'vue';
import styled from 'vue3-styled-components';

import Text from '@/components/Text'
import InputText from '@/components/InputText'
import searchIcon from 'public/icons/search.svg'


const { data: products } = useProductsQuery();
const isEmpty = computed(() => products.value?.length === 0);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  gap: 2rem;
`
const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
const SearchInput = styled(InputText)`
  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    max-width: 25rem;
  }
`

const gridContainer = styled.div`  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Deux colonnes de largeur égale */
  grid-gap: 20px; /* Espacement entre les éléments de la grille */
  width: 100%; /* Largeur totale de la grille */
  max-width: 220rem; /* Limite la largeur de la grille à 1200px, ajustez selon vos préférences */
  margin: 0 auto; /* Centre la grille horizontalement */
  padding: 20px; /* Marge intérieure pour l'espace autour de la grille */`;
  const gridContainerTheme = styled.div `  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Deux colonnes de largeur égale */
  grid-gap: 20px; /* Espacement entre les éléments de la grille */
  width: 100%; /* Largeur totale de la grille */
  max-width: 220rem; /* Limite la largeur de la grille à 1200px, ajustez selon vos préférences */
  margin: 0 auto; /* Centre la grille horizontalement */
  padding: 20px; /* Marge intérieure pour l'espace autour de la grille */`;
</script>
<template>
    <Wrapper>
    <SearchContainer>
      <Text variant="h3">Shop</Text>
      <SearchInput placeholder="search" :icon-left="searchIcon"></SearchInput>
    </SearchContainer>
    <gridContainer>
        <p v-if="isEmpty">No products</p>
        <ProductForm v-else v-for="product in products" :product="product" :key="product.id" class="grid-item"/>
    </gridContainer>
    <h2>Thèmes</h2>
    <gridContainerTheme>
        <p v-if="isEmpty">No products</p>
        <ProductThemeForm v-else class="grid-item"/>
    </gridContainerTheme>
    <h2>Avatars</h2>
    <gridContainerTheme>
        <p v-if="isEmpty">No products</p>
        <ProductProfilForm v-else class="grid-item"/>
    </gridContainerTheme>
    </Wrapper>
</template>
<style scoped>
</style>