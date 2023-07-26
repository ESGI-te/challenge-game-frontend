<script setup>
import styled from 'vue3-styled-components'
import Logo from '../components/Logo'

const wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-content: center;
  gap: 40px;
`
</script>

<template>
  <wrapper>
    <Logo />
    <h4>Les quizz qui animeront vos soirées</h4>

    <RouterLink :to="'/login'">
      <button class="primary bold">Jouer</button>
    </RouterLink>
  </wrapper>
</template>

<style scoped>
.primary {
  min-width: 342px;
}
@media screen and (max-width: 630px) {
  h2 {
    max-width: 342px;
  }
}
</style>
