<script setup>
import styled from 'vue3-styled-components'
import { RouterLink } from 'vue-router'
import headerLogo from 'public/img/header-logo.svg'

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem;
  background: var(--black);
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 2.5rem;
`
const Link = styled(RouterLink)`
  color: var(--white);
  font-size: 16px;
  text-decoration: none;
`
</script>

<template>
  <Wrapper>
    <img :src="headerLogo" alt="Logo" />
    <Nav>
      <Link to="/home">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="">Friends</Link>
      <Link to="">Profile</Link>
    </Nav>
  </Wrapper>
</template>

<style scoped></style>
