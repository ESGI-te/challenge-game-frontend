<script setup>
import styled from 'vue3-styled-components'
import Text from '@/components/Text'
import InputText from '@/components/InputText'
import searchIcon from 'public/icons/search.svg'
import { RouterLink, useRoute } from 'vue-router'
import { useResponsive } from 'composables/useResponsive'


const { isDesktopAndUp } = useResponsive()
const route = useRoute()
const isRouteActive = (to) => route.path === to

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

const FreindNav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;
`

const Link = styled(RouterLink)`
  text-decoration: none;
  ${({ to }) =>
    isRouteActive(to) &&
    `
    color: var(--primary);
    text-decoration: underline;
    font-weight: 800;
  `}
`
</script>

<template>
  <Wrapper>
    <SearchContainer>
      <Text variant="h3">Friend list</Text>
      <SearchInput placeholder="search" :icon-left="searchIcon"></SearchInput>
    </SearchContainer>

    <FreindNav>
      <Link active-class="active-link" to="/friends/requests">
        <Text :variant="isDesktopAndUp ? 'h4' : 'p'"> <b> My requests </b> </Text>
      </Link>
      <Link active-class="active-link" to="/friends/invitations">
        <Text :variant="isDesktopAndUp ? 'h4' : 'p'"> <b> Invitations </b> </Text>
      </Link>
      <Link active-class="active-link" to="/friends/add">
        <Text :variant="isDesktopAndUp ? 'h4' : 'p'"> <b> Add a friend </b> </Text>
      </Link>
      <Link active-class="active-link" to="/friends/list">
        <Text :variant="isDesktopAndUp ? 'h4' : 'p'"> <b> My friends </b> </Text>
      </Link>
    </FreindNav>

    <div>
      <router-view></router-view>
    </div>
  </Wrapper>
</template>

<style lang=""></style>
