<script setup>
import { useQuizzThemesQuery } from 'queries/quizzTheme/useQuizzThemesQuery'
import QuizzThemeBox from '@/components/QuizzThemeBox'
import styled from 'vue3-styled-components'

const { data: themes } = useQuizzThemesQuery()

console.log("themesss",themes);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
</script>

<template lang="">
  <Wrapper>
    <QuizzThemeBox
      v-for="theme in themes"
      :key="theme._id"
      :theme="theme"
    />
  </Wrapper>
</template>
