<script setup>
import { useQuizzThemesQuery } from 'queries/quizzTheme/useQuizzThemesQuery'
import QuizzThemeBox from '@/components/QuizzThemeBox'
import styled from 'vue3-styled-components'
import { useInventoryThemesQuery } from '@/queries/inventory/useInventoryThemesQuery';
import { getRandomColor } from '@/utils/helpers'

const { data: themes } = useQuizzThemesQuery()
const { data: inventoryThemes } = useInventoryThemesQuery()

const isOwned = (id) => inventoryThemes.value?.some((themeId) => themeId === id)

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`


</script>

<template>
  <Wrapper>
    <QuizzThemeBox v-for="(theme, i) in themes" :key="theme._id" :theme="theme" :isOwned="isOwned(theme._id)"
      :backgroundColor="getRandomColor(i)" />
  </Wrapper>
</template>
