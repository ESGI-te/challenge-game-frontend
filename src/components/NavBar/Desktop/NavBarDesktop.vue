<script setup>
import styled from 'vue3-styled-components'
import SmallLogo from 'components/Logo/small'
import { RouterLink } from 'vue-router';

const wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  background: var(--black);
`

const routes = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  margin-right: 100px;
`

</script>

<template>
  <wrapper>
    <SmallLogo/>
    <routes> 
      <RouterLink :to="'/home'" class="nav-route bold">Home</RouterLink >
      <RouterLink :to="'/shop'" class="nav-route bold">Shop</RouterLink >
      <RouterLink :to="''" class="nav-route bold">Amis</RouterLink >
      <RouterLink :to="''" class="nav-route bold">Profil</RouterLink >
      <RouterLink :to="''" class="nav-route bold">Quitter</RouterLink >
    </routes>
  </wrapper>
</template>

<style scoped>


.nav-route {
  color: var(--white);
  font-size: 16px;
  text-decoration: none;
}

@media screen and (max-width: 630px) {

}
</style>
