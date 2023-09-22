<script setup>
import { useQuizzThemesPackQuery } from 'queries/quizzThemePack/useQuizzThemesPackQuery'
import QuizzThemePack from '@/components/QuizzThemePack'
import styled from 'vue3-styled-components'

const { data: themePacks } = useQuizzThemesPackQuery()

console.log(themePacks);

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`
</script>

<template lang="">
  <Wrapper>
    <QuizzThemePack
      v-for="themePack in themePacks"
      :key="themePack._id"
      :themePack="themePack"
    />
  </Wrapper>
</template>