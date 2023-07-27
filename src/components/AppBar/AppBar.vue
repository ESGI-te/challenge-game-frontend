<script setup>
import styled from 'vue3-styled-components'
import { RouterLink, useRoute } from 'vue-router'
import headerLogo from 'public/img/header-logo.svg'
import homeIcon from 'public/icons/home.svg'
import profileIcon from 'public/icons/profile.svg'
import friendsIcon from 'public/icons/friends.svg'
import shopIcon from 'public/icons/shop.svg'
import { useResponsive } from 'composables/useResponsive'
import Text from 'components/Text'

const route = useRoute()
const isRouteActive = (to) => route.path === to
const { isDesktopAndUp } = useResponsive()
console.log(isRouteActive)

const Wrapper = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0.625rem 1.5rem;
  background: var(--white);

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    padding: 1.25rem;
    background: var(--black);
  }
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    width: fit-content;
    column-gap: 2.5rem;
  }
`
const Link = styled(RouterLink)`
  color: var(--black);
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    font-size: 1rem;
    color: var(--white);
    font-weight: 800;
  }

  ${({ to }) =>
    isRouteActive(to) &&
    `
    color: var(--primary);
    text-decoration: underline;
    font-weight: 800;
  `}
`
const LinkText = styled(Text)`
  font-weight: inherit;
  font-size: inherit;
  color: var(--black);

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    color: var(--white);
  }
`

const Logo = styled.img`
  display: none;

  ${({ theme }) => theme.mediaQueries.desktopAndUp} {
    display: initial;
  }
`
</script>

<template>
  <Wrapper>
    <Logo :src="headerLogo" alt="Logo" />
    <Nav>
      <Link active-class="active-link" to="/home">
        <img v-if="!isDesktopAndUp" :src="homeIcon" alt="Home" />
        <LinkText as="span">Home</LinkText>
      </Link>
      <Link active-class="active-link" to="/shop">
        <img v-if="!isDesktopAndUp" :src="shopIcon" alt="Shop" />
        <LinkText as="span">Shop</LinkText>
      </Link>
      <Link active-class="active-link" to="/friends">
        <img v-if="!isDesktopAndUp" :src="friendsIcon" alt="Friends" />
        <LinkText as="span">Friends</LinkText>
      </Link>
      <Link active-class="active-link" to="/profile">
        <img v-if="!isDesktopAndUp" :src="profileIcon" alt="Profile" />
        <LinkText as="span">Profile</LinkText>
      </Link>
    </Nav>
  </Wrapper>
</template>

<style scoped></style>
